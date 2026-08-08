const express = require('express');
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

module.exports = router;
