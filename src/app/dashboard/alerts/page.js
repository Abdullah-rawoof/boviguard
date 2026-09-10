"use client";

import { useState } from 'react';
import styles from './alerts.module.css';

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockAlerts = [
    { id: 'AL-1042', time: '10:42 AM', location: 'NH-44 (KM 120)', object: 'Cow (2)', severity: 'Critical', status: 'Resolved' },
    { id: 'AL-1015', time: '10:15 AM', location: 'NH-45 (KM 88)', object: 'Dog (1)', severity: 'Warning', status: 'Auto-Cleared' },
    { id: 'AL-0930', time: '09:30 AM', location: 'State Hwy 2', object: 'Horse (1)', severity: 'Warning', status: 'Auto-Cleared' },
    { id: 'AL-0845', time: '08:45 AM', location: 'NH-44 (KM 125)', object: 'Cow (1)', severity: 'Critical', status: 'Resolved' },
    { id: 'AL-0720', time: '07:20 AM', location: 'NH-44 (KM 90)', object: 'Sheep (3)', severity: 'Critical', status: 'Resolved' },
    { id: 'AL-0610', time: '06:10 AM', location: 'NH-45 (KM 80)', object: 'Person (1)', severity: 'Warning', status: 'Auto-Cleared' },
  ];

  const filteredAlerts = mockAlerts.filter(alert => 
    alert.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
    alert.object.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Alerts Log</h1>
        
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search location or object..." 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </header>

      <div className={styles.tableContainer}>
        <table className={styles.alertTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Severity</th>
              <th>Location</th>
              <th>Detected Object</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlerts.map((alert) => (
              <tr key={alert.id} className={styles.alertRow}>
                <td>{alert.id}</td>
                <td>{alert.time}</td>
                <td>
                  <span className={`${styles.badge} ${alert.severity === 'Critical' ? styles.badgeCritical : styles.badgeWarning}`}>
                    {alert.severity}
                  </span>
                </td>
                <td>{alert.location}</td>
                <td>{alert.object}</td>
                <td>{alert.status}</td>
                <td>
                  <button className={styles.actionBtn}>View Video</button>
                </td>
              </tr>
            ))}
            
            {filteredAlerts.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>
                  No alerts found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
