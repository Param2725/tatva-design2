import { useState, useEffect, useCallback } from 'react';
import { fetchLive } from '../api';
import type { LiveData } from '../types';

const REFRESH_INTERVAL = 1 * 60 * 1000; // 1 minute

function formatTime(timestamp: string): string {
  const d = new Date(timestamp);
  return d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

function getDeviceBadgeClass(device: string): string {
  switch (device) {
    case 'mobile':
      return 'admin-device-badge admin-device-badge--mobile';
    case 'tablet':
      return 'admin-device-badge admin-device-badge--tablet';
    default:
      return 'admin-device-badge admin-device-badge--desktop';
  }
}

export default function LivePage() {
  const [data, setData] = useState<LiveData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadLive = useCallback(async () => {
    try {
      const result = await fetchLive();
      setData(result);
    } catch (err) {
      console.error('Live fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLive();
    const interval = setInterval(loadLive, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [loadLive]);

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="admin-panel-header">
          <h3 className="admin-panel-title">Recent Visitors</h3>
        </div>
        <div style={{ padding: '1.25rem' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="admin-skeleton admin-skeleton--row" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h3 className="admin-panel-title">Recent Visitors</h3>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
          Last 20 visits • Auto-refreshes every 1 min
        </span>
      </div>
      <div className="admin-panel-body admin-panel-body--flush">
        <div className="admin-live-table-wrapper">
          <table className="admin-live-table">
            <thead>
              <tr>
                <th></th>
                <th>Time</th>
                <th>Page</th>
                <th>City</th>
                <th>Device</th>
                <th>Browser</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {data?.visits.map((v, i) => (
                <tr key={v._id} style={{ animationDelay: `${i * 30}ms` }}>
                  <td>
                    <span className="admin-live-pulse" />
                  </td>
                  <td>{formatTime(v.timestamp)}</td>
                  <td title={v.page}>{v.page}</td>
                  <td>{v.city}</td>
                  <td>
                    <span className={getDeviceBadgeClass(v.device)}>{v.device}</span>
                  </td>
                  <td>{v.browser}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>{v.ip}</td>
                </tr>
              ))}
              {(!data || data.visits.length === 0) && (
                <tr>
                  <td colSpan={7}>
                    <div className="admin-empty">No visits recorded yet</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
