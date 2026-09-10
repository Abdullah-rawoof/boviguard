"use client";

import styles from './analytics.module.css';

export default function AnalyticsPage() {
  const weeklyData = [
    { day: 'Mon', count: 12 },
    { day: 'Tue', count: 18 },
    { day: 'Wed', count: 25 },
    { day: 'Thu', count: 14 },
    { day: 'Fri', count: 32 },
    { day: 'Sat', count: 45 },
    { day: 'Sun', count: 38 },
  ];

  const maxCount = Math.max(...weeklyData.map(d => d.count));

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Analytics Overview</h1>
      </header>

      <div className={styles.chartGrid}>
        <section className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Weekly Detections</h2>
          
          <div className={styles.barChart}>
            {weeklyData.map((data, index) => {
              const heightPerc = (data.count / maxCount) * 100;
              return (
                <div key={index} className={styles.barCol}>
                  <div 
                    className={styles.bar} 
                    style={{ height: `${heightPerc}%` }}
                  >
                    <span className={styles.barValue}>{data.count}</span>
                  </div>
                  <span className={styles.barLabel}>{data.day}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Top Collision Hotspots</h2>
          
          <div className={styles.hotspotList}>
            <div className={`${styles.hotspotItem} ${styles.hotspotDanger}`}>
              <span>1. NH-44 (KM 120 - 125)</span>
              <span className={styles.hotspotMetric}>42 Detections</span>
            </div>
            <div className={`${styles.hotspotItem} ${styles.hotspotWarn}`}>
              <span>2. State Hwy 2 (KM 15)</span>
              <span className={styles.hotspotMetric}>28 Detections</span>
            </div>
            <div className={styles.hotspotItem}>
              <span>3. NH-45 (KM 88)</span>
              <span className={styles.hotspotMetric}>15 Detections</span>
            </div>
            <div className={styles.hotspotItem}>
              <span>4. NH-44 (KM 90 - 92)</span>
              <span className={styles.hotspotMetric}>8 Detections</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
