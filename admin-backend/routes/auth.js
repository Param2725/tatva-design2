const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

/**
 * POST /api/login
 * Plain text password comparison (single admin user).
 * Returns access token in body + refresh token as httpOnly cookie.
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Plain text comparison — single hardcoded user
  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate access token (15 min)
  const accessToken = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  // Generate refresh token (7 days)
  const refreshToken = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  // Set refresh token as httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/',
  });

  return res.json({ accessToken });
});

/**
 * POST /api/refresh
 * Uses refresh token from httpOnly cookie to issue a new access token.
 */
router.post('/refresh', (req, res) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.status(401).json({ error: 'No refresh token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    const accessToken = jwt.sign(
      { username: decoded.username, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    return res.json({ accessToken });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
});

/**
 * POST /api/logout
 * Clears the refresh token cookie.
 */
router.post('/logout', (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
  });

  return res.json({ message: 'Logged out' });
});

module.exports = router;
