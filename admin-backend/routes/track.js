const express = require('express');
const UAParser = require('ua-parser-js');
const Visit = require('../models/Visit');
const router = express.Router();

/**
 * Resolve IP to geolocation using ipapi.co (free tier).
 * Returns { country, region, city } or defaults on failure.
 */
async function resolveGeo(ip) {
  const defaults = { country: 'Unknown', region: 'Unknown', city: 'Unknown' };

  // Skip private/local IPs
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return defaults;
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) return defaults;

    const data = await response.json();

    // ipapi.co returns { error: true } on failure
    if (data.error) return defaults;

    return {
      country: data.country_name || 'Unknown',
      region: data.region || 'Unknown',
      city: data.city || 'Unknown',
    };
  } catch {
    return defaults;
  }
}

/**
 * Parse user agent string to determine device type and browser.
 */
function parseUserAgent(uaString) {
  const parser = new UAParser(uaString);
  const device = parser.getDevice();
  const browser = parser.getBrowser();

  let deviceType = 'desktop';
  if (device.type === 'mobile') deviceType = 'mobile';
  else if (device.type === 'tablet') deviceType = 'tablet';

  return {
    device: deviceType,
    browser: browser.name || 'Unknown',
  };
}

/**
 * Extract client IP from request, handling proxies.
 */
function getClientIP(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || req.ip || 'unknown';
}

/**
 * POST /api/track
 * Public endpoint. Receives page view data, resolves IP geolocation,
 * parses user agent, and stores in MongoDB.
 */
router.post('/track', async (req, res) => {
  try {
    const { page, referrer, userAgent, timestamp } = req.body;

    if (!page) {
      return res.status(400).json({ error: 'Page is required' });
    }

    const ip = getClientIP(req);
    const geo = await resolveGeo(ip);
    const { device, browser } = parseUserAgent(userAgent || req.headers['user-agent'] || '');

    const visit = new Visit({
      ip,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      page,
      referrer: referrer || '',
      device,
      browser,
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    });

    await visit.save();

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Track error:', err.message);
    return res.status(500).json({ error: 'Failed to track visit' });
  }
});

/**
 * GET /api/health
 * Public health check for uptime monitoring.
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
