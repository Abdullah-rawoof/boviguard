"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>BOVIGUARD</div>
        
        <nav className={styles.navMenu}>
          <Link 
            href="/dashboard" 
            className={`${styles.navItem} ${pathname === '/dashboard' ? styles.navActive : ''}`}
          >
            Live Feeds
          </Link>
          <Link 
            href="/dashboard/alerts" 
            className={`${styles.navItem} ${pathname === '/dashboard/alerts' ? styles.navActive : ''}`}
          >
            Alerts Log
          </Link>
          <Link 
            href="/dashboard/analytics" 
            className={`${styles.navItem} ${pathname === '/dashboard/analytics' ? styles.navActive : ''}`}
          >
            Analytics
          </Link>
          <Link 
            href="/dashboard/settings" 
            className={`${styles.navItem} ${pathname === '/dashboard/settings' ? styles.navActive : ''}`}
          >
            Settings
          </Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
