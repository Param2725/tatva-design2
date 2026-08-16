import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router';
import { useAuth } from './AuthContext';
import { exportReport } from './api';

/** SVG icon components kept inline for zero-dependency simplicity */
function IconDashboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconLive() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
      <path d="M7.76 16.24a6 6 0 0 1 0 -8.49" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M4.93 19.07a10 10 0 0 1 0 -14.14" />
    </svg>
  );
}

function IconLogout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
}

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Dashboard Overview',
  '/admin/live': 'Live Visitors',
};

export default function AdminLayout() {
  const { logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exportingFormat, setExportingFormat] = useState<'csv' | 'pdf' | null>(null);

  const pageTitle = PAGE_TITLES[location.pathname] || 'Dashboard';

  async function handleLogout() {
    await logout();
  }

  async function handleExport(format: 'csv' | 'pdf') {
    try {
      setExportingFormat(format);
      await exportReport(format);
    } catch (err) {
      console.error('Failed to export report', err);
      alert('Could not export report. Please try again.');
    } finally {
      setExportingFormat(null);
    }
  }

  return (
    <div className="admin-layout">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="admin-overlay admin-overlay--visible"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-sidebar-brand">
          <h2>Tatva Admin</h2>
          <span>Analytics Dashboard</span>
        </div>

        <nav className="admin-sidebar-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? 'admin-nav-link--active' : ''}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <IconDashboard />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/live"
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? 'admin-nav-link--active' : ''}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <IconLive />
            Live Visitors
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-nav-link" onClick={handleLogout}>
            <IconLogout />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              className="admin-hamburger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <IconMenu />
            </button>
            <h1 className="admin-topbar-title">{pageTitle}</h1>
          </div>

          <div className="admin-topbar-right">
            <div className="admin-refresh-indicator">
              <span className="admin-refresh-dot" />
              Auto-refresh: 1 min
            </div>
            <button
              className="admin-topbar-btn"
              onClick={() => handleExport('csv')}
              disabled={!!exportingFormat}
              title="Download Monthly CSV Report"
            >
              <IconDownload />
              {exportingFormat === 'csv' ? 'CSV...' : 'Export CSV'}
            </button>
            <button
              className="admin-topbar-btn"
              onClick={() => handleExport('pdf')}
              disabled={!!exportingFormat}
              title="Download Monthly PDF Report"
            >
              <IconDownload />
              {exportingFormat === 'pdf' ? 'PDF...' : 'Export PDF'}
            </button>
            <button className="admin-topbar-btn" onClick={handleLogout}>
              <IconLogout />
              Logout
            </button>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
