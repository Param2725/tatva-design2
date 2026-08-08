import type {
  StatsData,
  PagesData,
  DevicesData,
  TimelineData,
  LiveData,
  LoginResponse,
} from './types';

// ─── Token Management ────────────────────────────────────────────────

let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function getAccessToken(): string | null {
  return accessToken;
}

// ─── Base Fetch Wrapper ──────────────────────────────────────────────

const API_BASE = import.meta.env.VITE_BACKEND_URL
  ? `${import.meta.env.VITE_BACKEND_URL}/api`
  : '/api';

async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch(`${API_BASE}/refresh`, {
      method: 'POST',
      credentials: 'include',
    });
    if (!res.ok) return null;
    const data = await res.json();
    setAccessToken(data.accessToken);
    return data.accessToken;
  } catch {
    return null;
  }
}

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  let res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  // If 401, attempt a token refresh and retry once
  if (res.status === 401 && accessToken) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      headers['Authorization'] = `Bearer ${newToken}`;
      res = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers,
        credentials: 'include',
      });
    }
  }

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(errBody.error || `HTTP ${res.status}`);
  }

  return res.json();
}

// ─── Auth Endpoints ──────────────────────────────────────────────────

export async function loginApi(
  username: string,
  password: string
): Promise<LoginResponse> {
  const data = await apiFetch<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
  setAccessToken(data.accessToken);
  return data;
}

export async function logoutApi(): Promise<void> {
  await apiFetch('/logout', { method: 'POST' });
  setAccessToken(null);
}

export async function silentRefresh(): Promise<boolean> {
  const token = await refreshAccessToken();
  return !!token;
}

// ─── Admin Endpoints ─────────────────────────────────────────────────

export async function fetchStats(): Promise<StatsData> {
  return apiFetch<StatsData>('/admin/stats');
}

export async function fetchPages(): Promise<PagesData> {
  return apiFetch<PagesData>('/admin/pages');
}

export async function fetchDevices(): Promise<DevicesData> {
  return apiFetch<DevicesData>('/admin/devices');
}

export async function fetchTimeline(): Promise<TimelineData> {
  return apiFetch<TimelineData>('/admin/timeline');
}

export async function fetchLive(): Promise<LiveData> {
  return apiFetch<LiveData>('/admin/live');
}
