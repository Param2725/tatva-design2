const express = require('express');
const PDFDocument = require('pdfkit');
const { verifyToken } = require('../middleware/auth');
const Visit = require('../models/Visit');
const router = express.Router();

// Protect all admin routes
router.use(verifyToken);

/**
 * GET /api/admin/stats
 * Overview statistics: total visits, unique visitors,
 * today/yesterday counts, top 10 cities.
 */
router.get('/stats', async (req, res) => {
  try {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);

    const [totalVisits, uniqueVisitors, todayVisits, yesterdayVisits, topCities] =
      await Promise.all([
        // Total visits
        Visit.countDocuments(),

        // Unique IPs
        Visit.distinct('ip').then((ips) => ips.length),

        // Today's visits
        Visit.countDocuments({ timestamp: { $gte: todayStart } }),

        // Yesterday's visits
        Visit.countDocuments({
          timestamp: { $gte: yesterdayStart, $lt: todayStart },
        }),

        // Top 10 cities
        Visit.aggregate([
          { $group: { _id: '$city', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
          { $project: { city: '$_id', count: 1, _id: 0 } },
        ]),
      ]);

    res.json({
      totalVisits,
      uniqueVisitors,
      todayVisits,
      yesterdayVisits,
      topCities,
    });
  } catch (err) {
    console.error('Stats error:', err.message);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});



/**
 * GET /api/admin/pages
 * Visits aggregated by page path.
 */
router.get('/pages', async (req, res) => {
  try {
    const byPage = await Visit.aggregate([
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 },
      { $project: { page: '$_id', count: 1, _id: 0 } },
    ]);

    res.json({ byPage });
  } catch (err) {
    console.error('Pages error:', err.message);
    res.status(500).json({ error: 'Failed to fetch page data' });
  }
});

/**
 * GET /api/admin/devices
 * Visits aggregated by device type and browser.
 */
router.get('/devices', async (req, res) => {
  try {
    const [byDevice, byBrowser] = await Promise.all([
      Visit.aggregate([
        { $group: { _id: '$device', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $project: { device: '$_id', count: 1, _id: 0 } },
      ]),
      Visit.aggregate([
        { $group: { _id: '$browser', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { browser: '$_id', count: 1, _id: 0 } },
      ]),
    ]);

    res.json({ byDevice, byBrowser });
  } catch (err) {
    console.error('Devices error:', err.message);
    res.status(500).json({ error: 'Failed to fetch device data' });
  }
});

/**
 * GET /api/admin/timeline
 * Visits per day for the last 30 days.
 */
router.get('/timeline', async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const timeline = await Visit.aggregate([
      { $match: { timestamp: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
      { $project: { date: '$_id', count: 1, _id: 0 } },
    ]);

    // Fill in missing days with 0 counts
    const filledTimeline = [];
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const existing = timeline.find((t) => t.date === dateStr);
      filledTimeline.push({
        date: dateStr,
        count: existing ? existing.count : 0,
      });
    }

    res.json({ timeline: filledTimeline });
  } catch (err) {
    console.error('Timeline error:', err.message);
    res.status(500).json({ error: 'Failed to fetch timeline data' });
  }
});

/**
 * GET /api/admin/live
 * Last 20 visits, sorted by most recent.
 */
router.get('/live', async (req, res) => {
  try {
    const visits = await Visit.find()
      .sort({ timestamp: -1 })
      .limit(20)
      .select('-__v')
      .lean();

    // Mask last octet of IP for privacy
    const masked = visits.map((v) => ({
      ...v,
      ip: v.ip ? v.ip.replace(/\.\d+$/, '.***') : 'unknown',
    }));

    res.json({ visits: masked });
  } catch (err) {
    console.error('Live error:', err.message);
    res.status(500).json({ error: 'Failed to fetch live data' });
  }
});

/**
 * GET /api/admin/export?format=csv|pdf
 * Downloads CSV or PDF report of analytics from the last 30 days.
 */
router.get('/export', async (req, res) => {
  try {
    const format = (req.query.format || 'csv').toLowerCase();

    const now = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const [visits, totalVisits, uniqueVisitors, topCities, topPages, deviceBreakdown] =
      await Promise.all([
        Visit.find({ timestamp: { $gte: thirtyDaysAgo } })
          .sort({ timestamp: -1 })
          .lean(),
        Visit.countDocuments({ timestamp: { $gte: thirtyDaysAgo } }),
        Visit.distinct('ip', { timestamp: { $gte: thirtyDaysAgo } }).then(
          (ips) => ips.length
        ),
        Visit.aggregate([
          { $match: { timestamp: { $gte: thirtyDaysAgo } } },
          { $group: { _id: '$city', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 5 },
        ]),
        Visit.aggregate([
          { $match: { timestamp: { $gte: thirtyDaysAgo } } },
          { $group: { _id: '$page', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 5 },
        ]),
        Visit.aggregate([
          { $match: { timestamp: { $gte: thirtyDaysAgo } } },
          { $group: { _id: '$device', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
        ]),
      ]);

    const filenameStr = `analytics-report-30-days-${now.toISOString().split('T')[0]}`;

    if (format === 'pdf') {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filenameStr}.pdf"`
      );

      const doc = new PDFDocument({ margin: 40, size: 'A4' });
      doc.pipe(res);

      // Header Banner
      doc
        .rect(0, 0, 595, 70)
        .fill('#2563eb');

      doc
        .fillColor('#ffffff')
        .fontSize(20)
        .font('Helvetica-Bold')
        .text('TATVA CONSULTANCY', 40, 20);

      doc
        .fillColor('#dbeafe')
        .fontSize(10)
        .font('Helvetica')
        .text('Monthly Website Analytics & Visitor Report', 40, 44);

      doc
        .fillColor('#dbeafe')
        .fontSize(9)
        .text(`Generated: ${now.toLocaleDateString('en-IN')}`, 430, 44, { align: 'right' });

      // Period Subtitle
      doc.moveDown(3);
      doc
        .fillColor('#64748b')
        .fontSize(10)
        .text(`Report Period: ${thirtyDaysAgo.toLocaleDateString('en-IN')} to ${now.toLocaleDateString('en-IN')}`, 40);

      doc.moveDown(1);

      // Summary Metric Cards (2 Side-by-Side Cards)
      const startY = doc.y;

      // Card 1: Total Visits
      doc
        .roundedRect(40, startY, 245, 65, 8)
        .fillAndStroke('#f8fafc', '#e2e8f0');
      doc
        .fillColor('#64748b')
        .fontSize(9)
        .font('Helvetica-Bold')
        .text('TOTAL VISITS (30 DAYS)', 55, startY + 12);
      doc
        .fillColor('#2563eb')
        .fontSize(22)
        .font('Helvetica-Bold')
        .text(totalVisits.toLocaleString(), 55, startY + 28);

      // Card 2: Unique Visitors
      doc
        .roundedRect(305, startY, 250, 65, 8)
        .fillAndStroke('#f8fafc', '#e2e8f0');
      doc
        .fillColor('#64748b')
        .fontSize(9)
        .font('Helvetica-Bold')
        .text('UNIQUE VISITORS', 320, startY + 12);
      doc
        .fillColor('#10b981')
        .fontSize(22)
        .font('Helvetica-Bold')
        .text(uniqueVisitors.toLocaleString(), 320, startY + 28);

      doc.y = startY + 80;

      // Section: Top Breakdown Tables Side by Side
      const secY = doc.y + 10;
      doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text('Top Cities & Top Pages', 40, secY);
      doc.moveDown(0.8);

      const tableTopY = doc.y;

      // Left Column: Top Cities Table
      doc.fontSize(9).font('Helvetica-Bold').fillColor('#2563eb').text('Top Cities', 40, tableTopY);
      doc.moveDown(0.4);
      const citiesY = doc.y;

      doc.fontSize(8).font('Helvetica-Bold').fillColor('#64748b');
      doc.text('City', 40, citiesY);
      doc.text('Visits', 230, citiesY, { align: 'right' });
      doc.moveTo(40, citiesY + 12).lineTo(270, citiesY + 12).stroke('#cbd5e1');

      let curY = citiesY + 18;
      topCities.forEach((c) => {
        doc.fontSize(8).font('Helvetica').fillColor('#334155');
        doc.text(c._id || 'Unknown', 40, curY);
        doc.text(c.count.toString(), 230, curY, { align: 'right' });
        curY += 16;
      });
      if (topCities.length === 0) {
        doc.fontSize(8).font('Helvetica-Oblique').fillColor('#94a3b8').text('No data recorded', 40, curY);
      }

      // Right Column: Top Pages Table
      doc.fontSize(9).font('Helvetica-Bold').fillColor('#2563eb').text('Top Pages', 305, tableTopY);
      const pagesY = citiesY;

      doc.fontSize(8).font('Helvetica-Bold').fillColor('#64748b');
      doc.text('Page Path', 305, pagesY);
      doc.text('Visits', 510, pagesY, { align: 'right' });
      doc.moveTo(305, pagesY + 12).lineTo(555, pagesY + 12).stroke('#cbd5e1');

      curY = pagesY + 18;
      topPages.forEach((p) => {
        const pagePath = (p._id || '/').substring(0, 32);
        doc.fontSize(8).font('Helvetica').fillColor('#334155');
        doc.text(pagePath, 305, curY);
        doc.text(p.count.toString(), 510, curY, { align: 'right' });
        curY += 16;
      });
      if (topPages.length === 0) {
        doc.fontSize(8).font('Helvetica-Oblique').fillColor('#94a3b8').text('No data recorded', 305, curY);
      }

      // Section: Detailed Visitor Log Table
      doc.y = Math.max(curY + 25, citiesY + 120);
      doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text('Detailed Visitors Log', 40);
      doc.moveDown(0.6);

      // Table Header Row
      const logHeaderY = doc.y;
      doc.rect(40, logHeaderY, 515, 20).fill('#f1f5f9');
      doc.fontSize(8).font('Helvetica-Bold').fillColor('#475569');
      doc.text('Date & Time', 45, logHeaderY + 6);
      doc.text('Page Path', 150, logHeaderY + 6);
      doc.text('City', 320, logHeaderY + 6);
      doc.text('Device', 420, logHeaderY + 6);
      doc.text('Browser', 480, logHeaderY + 6);

      let logRowY = logHeaderY + 24;
      const displayVisits = visits.slice(0, 25);

      displayVisits.forEach((v, index) => {
        // Alternating row background
        if (index % 2 === 1) {
          doc.rect(40, logRowY - 2, 515, 18).fill('#f8fafc');
        }

        const dateStr = new Date(v.timestamp).toLocaleString('en-IN', {
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
        const pageStr = (v.page || '/').substring(0, 32);
        const cityStr = (v.city || 'Unknown').substring(0, 16);
        const deviceStr = (v.device || 'desktop');
        const browserStr = (v.browser || 'Unknown').substring(0, 12);

        doc.fontSize(7.5).font('Helvetica').fillColor('#1e293b');
        doc.text(dateStr, 45, logRowY);
        doc.text(pageStr, 150, logRowY);
        doc.text(cityStr, 320, logRowY);
        doc.text(deviceStr, 420, logRowY);
        doc.text(browserStr, 480, logRowY);

        logRowY += 18;
      });

      if (displayVisits.length === 0) {
        doc.fontSize(8).font('Helvetica-Oblique').fillColor('#94a3b8').text('No visit logs available for this period.', 45, logRowY);
      }

      // Footer
      doc
        .fontSize(8)
        .font('Helvetica')
        .fillColor('#94a3b8')
        .text('Tatva Consultancy Confidential Report — Page 1', 40, 780, { align: 'center' });

      doc.end();
      return;
    }

    // Default CSV format
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${filenameStr}.csv"`
    );

    let csv = 'Timestamp,Page,City,Region,Device,Browser,IP,Referrer\n';
    visits.forEach((v) => {
      const time = new Date(v.timestamp).toISOString();
      const page = `"${(v.page || '').replace(/"/g, '""')}"`;
      const city = `"${(v.city || 'Unknown').replace(/"/g, '""')}"`;
      const region = `"${(v.region || 'Unknown').replace(/"/g, '""')}"`;
      const device = `"${(v.device || 'desktop').replace(/"/g, '""')}"`;
      const browser = `"${(v.browser || 'Unknown').replace(/"/g, '""')}"`;
      const ip = `"${(v.ip ? v.ip.replace(/\.\d+$/, '.***') : 'unknown').replace(/"/g, '""')}"`;
      const referrer = `"${(v.referrer || '').replace(/"/g, '""')}"`;

      csv += `${time},${page},${city},${region},${device},${browser},${ip},${referrer}\n`;
    });

    res.send(csv);
  } catch (err) {
    console.error('Export error:', err.message);
    res.status(500).json({ error: 'Failed to export report' });
  }
});

module.exports = router;
