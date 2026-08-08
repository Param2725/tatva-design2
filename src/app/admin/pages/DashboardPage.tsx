import { useState, useEffect, useCallback } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import {
  fetchStats,
  fetchTimeline,
  fetchPages,
  fetchDevices,
  fetchLive,
} from '../api';
import type {
  StatsData,
  TimelineData,
  PagesData,
  DevicesData,
  LiveData,
} from '../types';

// ─── Constants ───────────────────────────────────────────────────────

const REFRESH_INTERVAL = 1 * 60 * 1000; // 1 minute

const PIE_COLORS = ['#2563eb', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];

// ─── Small Icon Components ───────────────────────────────────────────

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

// ─── Helper: Animated Number ─────────────────────────────────────────

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setDisplay(0);
      return;
    }
    const duration = 800;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <>{display.toLocaleString()}</>;
}

// ─── Custom Tooltip ──────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '8px',
        padding: '0.5rem 0.75rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        fontSize: '0.8125rem',
      }}
    >
      <p style={{ margin: 0, fontWeight: 600, color: '#0f172a' }}>
        {payload[0].value.toLocaleString()} visits
      </p>
      <p style={{ margin: '2px 0 0', color: '#94a3b8', fontSize: '0.75rem' }}>
        {label}
      </p>
    </div>
  );
}

// ─── Skeleton Components ─────────────────────────────────────────────

function StatsSkeleton() {
  return (
    <div className="admin-stats-grid">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="admin-skeleton admin-skeleton--stat" />
      ))}
    </div>
  );
}

function ChartSkeleton() {
  return <div className="admin-skeleton admin-skeleton--chart" />;
}

function ListSkeleton() {
  return (
    <div style={{ padding: '1.25rem' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="admin-skeleton admin-skeleton--row" />
      ))}
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────

export default function DashboardPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [timeline, setTimeline] = useState<TimelineData | null>(null);
  const [pages, setPages] = useState<PagesData | null>(null);
  const [devices, setDevices] = useState<DevicesData | null>(null);
  const [live, setLive] = useState<LiveData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadAll = useCallback(async () => {
    try {
      const [s, t, p, d, l] = await Promise.all([
        fetchStats(),
        fetchTimeline(),
        fetchPages(),
        fetchDevices(),
        fetchLive(),
      ]);
      setStats(s);
      setTimeline(t);
      setPages(p);
      setDevices(d);
      setLive(l);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
    const interval = setInterval(loadAll, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [loadAll]);

  // ─── Stats Cards ───────────────────────────────────────────────────

  function renderStats() {
    if (!stats) return <StatsSkeleton />;

    const todayDelta =
      stats.yesterdayVisits > 0
        ? Math.round(
            ((stats.todayVisits - stats.yesterdayVisits) / stats.yesterdayVisits) * 100
          )
        : stats.todayVisits > 0
        ? 100
        : 0;

    const cards = [
      {
        label: 'Total Visits',
        value: stats.totalVisits,
        icon: <IconEye />,
        iconClass: 'admin-stat-icon--blue',
        delta: null,
      },
      {
        label: 'Unique Visitors',
        value: stats.uniqueVisitors,
        icon: <IconUsers />,
        iconClass: 'admin-stat-icon--green',
        delta: null,
      },
      {
        label: "Today's Visits",
        value: stats.todayVisits,
        icon: <IconTrendUp />,
        iconClass: 'admin-stat-icon--purple',
        delta: todayDelta,
      },
      {
        label: "Yesterday's Visits",
        value: stats.yesterdayVisits,
        icon: <IconCalendar />,
        iconClass: 'admin-stat-icon--amber',
        delta: null,
      },
    ];

    return (
      <div className="admin-stats-grid">
        {cards.map((c) => (
          <div className="admin-stat-card" key={c.label}>
            <div className="admin-stat-header">
              <p className="admin-stat-label">{c.label}</p>
              <div className={`admin-stat-icon ${c.iconClass}`}>{c.icon}</div>
            </div>
            <p className="admin-stat-value">
              <AnimatedNumber value={c.value} />
            </p>
            {c.delta !== null && (
              <span
                className={`admin-stat-delta ${
                  c.delta > 0
                    ? 'admin-stat-delta--up'
                    : c.delta < 0
                    ? 'admin-stat-delta--down'
                    : 'admin-stat-delta--neutral'
                }`}
              >
                {c.delta > 0 ? <IconArrowUp /> : c.delta < 0 ? <IconArrowDown /> : null}
                {c.delta > 0 ? '+' : ''}
                {c.delta}% vs yesterday
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // ─── Timeline Chart ────────────────────────────────────────────────

  function renderTimeline() {
    if (!timeline) return <ChartSkeleton />;

    const data = timeline.timeline.map((t) => ({
      ...t,
      shortDate: t.date.slice(5), // MM-DD
    }));

    return (
      <div className="admin-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis
              dataKey="shortDate"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#2563eb"
              strokeWidth={2.5}
              fill="url(#areaGradient)"
              dot={false}
              activeDot={{ r: 5, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─── Top Cities ───────────────────────────────────────────────────

  function renderTopCities() {
    if (!stats) return <ListSkeleton />;

    const topCities = stats.topCities || [];
    const max = topCities[0]?.count || 1;

    return (
      <ul className="admin-rank-list">
        {topCities.map((c, i) => (
          <li className="admin-rank-item" key={c.city}>
            <span className="admin-rank-position">{i + 1}</span>
            <span className="admin-rank-name">{c.city}</span>
            <div className="admin-rank-bar-wrapper">
              <div
                className="admin-rank-bar"
                style={{ width: `${(c.count / max) * 100}%` }}
              />
            </div>
            <span className="admin-rank-count">{c.count.toLocaleString()}</span>
          </li>
        ))}
        {topCities.length === 0 && (
          <div className="admin-empty">No city data yet</div>
        )}
      </ul>
    );
  }

  // ─── Top Pages ─────────────────────────────────────────────────────

  function renderTopPages() {
    if (!pages) return <ListSkeleton />;

    const max = pages.byPage[0]?.count || 1;

    return (
      <ul className="admin-rank-list">
        {pages.byPage.slice(0, 10).map((p, i) => (
          <li className="admin-rank-item" key={p.page}>
            <span className="admin-rank-position">{i + 1}</span>
            <span className="admin-rank-name" title={p.page}>{p.page}</span>
            <div className="admin-rank-bar-wrapper">
              <div
                className="admin-rank-bar"
                style={{ width: `${(p.count / max) * 100}%` }}
              />
            </div>
            <span className="admin-rank-count">{p.count.toLocaleString()}</span>
          </li>
        ))}
        {pages.byPage.length === 0 && (
          <div className="admin-empty">No page data yet</div>
        )}
      </ul>
    );
  }

  // ─── Devices Pie Chart ─────────────────────────────────────────────

  function renderDevicesPie() {
    if (!devices) return <ChartSkeleton />;

    if (devices.byDevice.length === 0) {
      return <div className="admin-empty">No device data yet</div>;
    }

    const data = devices.byDevice.map((d) => ({
      name: d.device.charAt(0).toUpperCase() + d.device.slice(1),
      value: d.count,
    }));

    return (
      <div className="admin-chart-container admin-chart-container--sm">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─── Browsers Bar Chart ────────────────────────────────────────────

  function renderBrowsersBar() {
    if (!devices) return <ChartSkeleton />;

    if (devices.byBrowser.length === 0) {
      return <div className="admin-empty">No browser data yet</div>;
    }

    const data = devices.byBrowser.slice(0, 6).map((b) => ({
      name: b.browser,
      count: b.count,
    }));

    return (
      <div className="admin-chart-container admin-chart-container--sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─── Render ────────────────────────────────────────────────────────

  if (loading) {
    return (
      <>
        <StatsSkeleton />
        <div className="admin-dashboard-row">
          <div className="admin-panel"><ChartSkeleton /></div>
          <div className="admin-panel"><ListSkeleton /></div>
        </div>
      </>
    );
  }

  return (
    <>
      {renderStats()}

      {/* Row 1: Timeline + Top Cities */}
      <div className="admin-dashboard-row">
        <div className="admin-panel">
          <div className="admin-panel-header">
            <h3 className="admin-panel-title">Visits — Last 30 Days</h3>
          </div>
          <div className="admin-panel-body">{renderTimeline()}</div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h3 className="admin-panel-title">Top Cities</h3>
          </div>
          <div className="admin-panel-body">{renderTopCities()}</div>
        </div>
      </div>

      {/* Row 2: Top Pages + Devices + Browsers */}
      <div className="admin-dashboard-row admin-dashboard-row--triple">
        <div className="admin-panel">
          <div className="admin-panel-header">
            <h3 className="admin-panel-title">Top Pages</h3>
          </div>
          <div className="admin-panel-body">{renderTopPages()}</div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h3 className="admin-panel-title">Device Breakdown</h3>
          </div>
          <div className="admin-panel-body">{renderDevicesPie()}</div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h3 className="admin-panel-title">Top Browsers</h3>
          </div>
          <div className="admin-panel-body">{renderBrowsersBar()}</div>
        </div>
      </div>
    </>
  );
}
