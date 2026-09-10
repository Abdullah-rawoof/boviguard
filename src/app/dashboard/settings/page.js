"use client";

import { useState } from 'react';
import styles from './settings.module.css';

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState(80);
  const [volume, setVolume] = useState(100);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoRecord, setAutoRecord] = useState(true);

  const handleSave = () => {
    alert("Settings saved successfully! (Mock Action)");
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>System Preferences</h1>
      </header>

      <section className={styles.settingsGroup}>
        <h2 className={styles.groupTitle}>AI Detection Engine</h2>
        
        <div className={styles.settingItem}>
          <div className={styles.settingInfo}>
            <h3>Confidence Threshold ({sensitivity}%)</h3>
            <p>Minimum AI confidence required to trigger an alert.</p>
          </div>
          <input 
            type="range" 
            min="50" 
            max="100" 
            value={sensitivity} 
            onChange={(e) => setSensitivity(e.target.value)} 
            className={styles.slider} 
          />
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingInfo}>
            <h3>Auto-Record on Alert</h3>
            <p>Automatically save 30s video clips when cattle are detected.</p>
          </div>
          <button 
            className={`${styles.toggleBtn} ${autoRecord ? styles.on : styles.off}`}
            onClick={() => setAutoRecord(!autoRecord)}
          >
            {autoRecord ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </section>

      <section className={styles.settingsGroup}>
        <h2 className={styles.groupTitle}>Notifications & Audio</h2>
        
        <div className={styles.settingItem}>
          <div className={styles.settingInfo}>
            <h3>Siren Volume ({volume}%)</h3>
            <p>Master volume for the dashboard web audio siren.</p>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume} 
            onChange={(e) => setVolume(e.target.value)} 
            className={styles.slider} 
          />
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingInfo}>
            <h3>Email Alerts</h3>
            <p>Send critical incident reports to system administrators.</p>
          </div>
          <button 
            className={`${styles.toggleBtn} ${emailAlerts ? styles.on : styles.off}`}
            onClick={() => setEmailAlerts(!emailAlerts)}
          >
            {emailAlerts ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </section>

      <button className={styles.saveBtn} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}
