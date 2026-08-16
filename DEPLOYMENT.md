# Developer Handoff & Deployment Guide — Admin Backend & Analytics

This document details the configuration and code changes required for the **dev team** when deploying the Express/MongoDB Admin Backend and connecting the deployed Frontend.

---

## Architecture Overview

- **Frontend**: Vite + React + React Router (`tatvaconsultancy.in`)
- **Backend**: Express.js + Mongoose (`admin-backend` directory)
- **Database**: MongoDB Atlas (`tatva-analytics`)

---

## 1. Backend Environment Setup (`admin-backend/.env`)

When deploying the Express backend (e.g. Render, Railway, AWS EC2, DigitalOcean, Heroku), ensure the environment variables are configured as follows:

| Environment Variable | Description | Example / Production Value |
|---|---|---|
| `PORT` | Port for the Express server | `5000` (or injected by host platform) |
| `NODE_ENV` | Environment mode | `production` |
| `ADMIN_USERNAME` | Admin login username | `admin` |
| `ADMIN_PASSWORD` | Admin login password | `YourSecurePasswordHere` |
| `JWT_SECRET` | Secret string for 15-min access tokens | Long random 64-char string |
| `JWT_REFRESH_SECRET` | Secret string for 7-day refresh tokens | Long random 64-char string |
| `MONGODB_URI` | MongoDB Atlas Connection String | `mongodb+srv://...` |
| `ALLOWED_ORIGIN` | Comma-separated list of allowed origins for CORS | `https://tatvaconsultancy.in,https://www.tatvaconsultancy.in` |

### Available Endpoints
| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/login` | POST | ❌ | Returns access token + refresh cookie |
| `/api/refresh` | POST | ❌ (cookie) | Returns new access token |
| `/api/logout` | POST | ❌ | Clears refresh cookie |
| `/api/admin/stats` | GET | ✅ Bearer | Returns overall metrics & top 10 cities |
| `/api/admin/timeline` | GET | ✅ Bearer | Returns 30-day visit counts |
| `/api/admin/pages` | GET | ✅ Bearer | Returns top visited pages |
| `/api/admin/devices` | GET | ✅ Bearer | Returns device & browser distributions |
| `/api/admin/live` | GET | ✅ Bearer | Returns recent 20 visits |
| `/api/admin/export` | GET | ✅ Bearer | Downloads CSV or PDF report of monthly analytics (`?format=csv` or `?format=pdf`) |

> [!CRITICAL]
> **CORS & Cookies**: In `production`, Express sets `secure: true` and `sameSite: 'none'` on the refresh token cookie. For cross-domain cookies to work (if backend is on a separate domain like `api.tatvaconsultancy.in`), the backend **MUST** run over HTTPS.

---

## 2. Code Adjustments for Backend Deployment

### A. Reverse Proxy IP Resolution (`admin-backend/server.js`)
If hosting behind Nginx, Cloudflare, AWS ALB, or Render, `app.set('trust proxy', 1)` is already enabled in `server.js`. This ensures client IP addresses are correctly extracted from the `X-Forwarded-For` header for city geolocation.

### B. Geolocation Service (`admin-backend/routes/track.js`)
The IP lookup uses `ipapi.co` free tier:
```js
fetch(`https://ipapi.co/${ip}/json/`)
```
*Note: If your site receives high traffic (> 1,000 visits/day), consider upgrading `ipapi.co` or switching to MaxMind GeoIP2 local database to prevent rate-limiting.*

---

## 3. Frontend Deployment & Environment Build (`frontend`)

Since the frontend is already deployed, it needs to know where to send `/api/track` and admin requests.

### A. Add Environment Variable
Add `VITE_BACKEND_URL` to your frontend deployment build settings (e.g., Vercel, Netlify, Cloudflare Pages, GitHub Actions):

```env
VITE_BACKEND_URL=https://api.tatvaconsultancy.in
```
*(Replace `https://api.tatvaconsultancy.in` with the actual deployed backend URL).*

### B. How `VITE_BACKEND_URL` works in code

1. **Page Tracking** (`src/app/hooks/usePageTracking.ts`):
   ```ts
   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';
   const url = `${BACKEND_URL}/api/track`;
   ```
2. **Admin API Client** (`src/app/admin/api.ts`):
   ```ts
   const API_BASE = import.meta.env.VITE_BACKEND_URL 
     ? `${import.meta.env.VITE_BACKEND_URL}/api`
     : '/api';
   ```

---

## 4. Summary Checklist for Dev Team

- [ ] Deploy `admin-backend` to hosting service (e.g. Render / Railway / EC2) with HTTPS enabled.
- [ ] Configure `admin-backend/.env` with production MongoDB URI, JWT secrets, and `ALLOWED_ORIGIN=https://tatvaconsultancy.in`.
- [ ] Add `VITE_BACKEND_URL=https://<your-backend-domain>` to frontend environment settings.
- [ ] Rebuild & redeploy frontend (`npm run build`).
- [ ] Verify tracking by visiting `https://tatvaconsultancy.in` and checking the live feed at `https://tatvaconsultancy.in/admin/live`.
