import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <section className={styles.topSection}>
        <div className={styles.badge}>NEXT-GEN HIGHWAY SAFETY</div>
        
        <h1 className={styles.title}>
          AI-POWERED CATTLE<br/>
          COLLISION<br/>
          <span className={styles.titleHighlight}>PREVENTION</span>
        </h1>
        
        <p className={styles.subtitle}>
          Transforming existing CCTV networks into intelligent highway guardians. Monitor feeds, detect cattle in real-time, and prevent accidents before they happen.
        </p>

        <Link href="/dashboard" className={styles.ctaButton}>
          ENTER HIGHWAY DASHBOARD
        </Link>
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={`${styles.iconBox} ${styles.iconBlue}`}>📷</div>
            <h3>CCTV INTEGRATION</h3>
            <p>Seamlessly connects with your existing highway CCTV cameras to process video feeds without requiring new hardware.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.iconBox} ${styles.iconGreen}`}>🧠</div>
            <h3>AI DETECTION</h3>
            <p>Advanced computer vision algorithms instantly detect cattle wandering onto highways, reducing false positives.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.iconBox} ${styles.iconRed}`}>⚡</div>
            <h3>REAL-TIME ALERTS</h3>
            <p>Instantly notifies highway authorities and electronic signboards to warn drivers of incoming hazards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
