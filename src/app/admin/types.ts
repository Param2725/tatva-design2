// ─── API Response Types ──────────────────────────────────────────────

export interface StatsData {
  totalVisits: number;
  uniqueVisitors: number;
  todayVisits: number;
  yesterdayVisits: number;
  topCities: { city: string; count: number }[];
}

export interface PagesData {
  byPage: { page: string; count: number }[];
}

export interface DevicesData {
  byDevice: { device: string; count: number }[];
  byBrowser: { browser: string; count: number }[];
}

export interface TimelineEntry {
  date: string;
  count: number;
}

export interface TimelineData {
  timeline: TimelineEntry[];
}

export interface Visit {
  _id: string;
  ip: string;
  region: string;
  city: string;
  page: string;
  referrer: string;
  device: string;
  browser: string;
  timestamp: string;
}

export interface LiveData {
  visits: Visit[];
}

export interface LoginResponse {
  accessToken: string;
}

export interface ErrorResponse {
  error: string;
}
