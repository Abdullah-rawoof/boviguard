import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <main className={styles.hero}>
        <h1 className={styles.title}>BOVIGUARD</h1>
        
        <p className={styles.subtitle}>
          Transforming existing highway CCTV networks into intelligent, life-saving guardians.
        </p>

        <Link href="/dashboard" className={styles.ctaButton}>
          Enter Command Center
        </Link>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>🧠 Real-Time AI</h3>
            <p>Live edge-based machine learning detects collision threats instantly with zero latency.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📍 GPS Tracking</h3>
            <p>Automatically logs exact latitude and longitude coordinates for immediate response.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🔊 Smart Audio</h3>
            <p>High-decibel pulsing sirens trigger dynamically to warn both animals and drivers.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
