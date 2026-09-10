"use client";

import { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isActiveRef = useRef(false);
  
  const [boxPos, setBoxPos] = useState({ top: 30, left: 40, width: 25, height: 35 });
  const [detectionLabel, setDetectionLabel] = useState("SCANNING...");
  const [isAlarmSounding, setIsAlarmSounding] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [gpsLocation, setGpsLocation] = useState(null);
  
  const [audioCtx, setAudioCtx] = useState(null);
  const [sirenInterval, setSirenInterval] = useState(null);
  const modelRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      modelRef.current = await cocoSsd.load();
      setIsModelLoading(false);
    };
    loadModel();
  }, []);

  const detectFrame = async () => {
    if (videoRef.current && modelRef.current && isActiveRef.current) {
      // Prevent TensorFlow crash "Requested texture size [0x0] is invalid" 
      // by ensuring the video stream has fully loaded before detecting.
      if (videoRef.current.readyState === 4) {
        const predictions = await modelRef.current.detect(videoRef.current);
        
        const criticalObjects = ['cow', 'person', 'dog', 'horse', 'sheep'];
        const criticalDetection = predictions.find(p => criticalObjects.includes(p.class) && p.score > 0.60);
        
        if (criticalDetection) {
          // COCO-SSD returns [x, y, width, height] in pixels
          const vidWidth = videoRef.current.videoWidth;
          const vidHeight = videoRef.current.videoHeight;
          
          // Convert to percentages and mirror the X coordinate because the video is flipped
          const xPerc = (criticalDetection.bbox[0] / vidWidth) * 100;
          const yPerc = (criticalDetection.bbox[1] / vidHeight) * 100;
          const wPerc = (criticalDetection.bbox[2] / vidWidth) * 100;
          const hPerc = (criticalDetection.bbox[3] / vidHeight) * 100;
          
          // Video is mirrored horizontally via CSS transform: scaleX(-1)
          // So the bounding box X coordinate also needs to be mirrored.
          const mirroredLeft = 100 - xPerc - wPerc;
          
          setBoxPos({ top: yPerc, left: mirroredLeft, width: wPerc, height: hPerc });
          setDetectionLabel(`${criticalDetection.class.toUpperCase()} (${Math.round(criticalDetection.score * 100)}%) - TRACKING`);
          setIsAlarmSounding(true);
        } else {
          setIsAlarmSounding(false);
        }
      }
    }
    
    if (isActiveRef.current) {
      requestRef.current = requestAnimationFrame(detectFrame);
    }
  };

  useEffect(() => {
    isActiveRef.current = isActive;
    if (isActive) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          requestRef.current = requestAnimationFrame(detectFrame);
        })
        .catch(err => console.error("Webcam error:", err));
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      setIsAlarmSounding(false);
    }
    
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isActive]);

  const toggleSystem = () => {
    if (isModelLoading) return;
    
    if (!isActive) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGpsLocation({
              lat: position.coords.latitude.toFixed(4),
              lng: position.coords.longitude.toFixed(4)
            });
          },
          (err) => console.error("Error fetching GPS:", err)
        );
      }
    } else {
      setGpsLocation(null);
    }
    
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isAlarmSounding && isActive) {
      if (!audioCtx) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        setAudioCtx(ctx);
        
        const interval = setInterval(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = 'square';
          osc.frequency.setValueAtTime(800, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.2);
          
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 0.5);
        }, 600);
        
        setSirenInterval(interval);
      }
    } else {
      if (sirenInterval) {
        clearInterval(sirenInterval);
        setSirenInterval(null);
      }
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
    }
  }, [isAlarmSounding, isActive, audioCtx, sirenInterval]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.dashboardTitle}>System Overview</h1>
        
        <button 
          className={`${styles.activateBtn} ${isActive ? styles.btnActive : ''}`}
          onClick={toggleSystem}
          disabled={isModelLoading}
        >
          {isModelLoading ? 'LOADING AI...' : isActive ? 'SYSTEM ARMED' : 'ACTIVATE SECURITY SYSTEM'}
        </button>
      </header>

      <div className={styles.dashboardGrid}>
        <section className={styles.cctvSection}>
          <div className={styles.sectionTitle}>
            Live Feed: Highway NH-44 (KM 120)
            <span className={styles.liveBadge}>LIVE</span>
          </div>
          
          <div className={styles.cctvFeed}>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className={styles.webcamVideo}
            />
            
            {isActive && isAlarmSounding && (
              <div 
                className={styles.boundingBox}
                style={{ top: `${boxPos.top}%`, left: `${boxPos.left}%`, width: `${boxPos.width}%`, height: `${boxPos.height}%` }}
              >
                <span className={styles.boundingBoxLabel}>{detectionLabel}</span>
              </div>
            )}
            
            {!isActive && !isModelLoading && (
              <div className={styles.systemOfflineText}>
                DETECTION OFFLINE. CLICK ACTIVATE.
              </div>
            )}
          </div>
        </section>

        <section className={styles.alertsSection}>
          <div className={styles.sectionTitle}>Recent Alerts</div>
          
          <div className={styles.alertList}>
            {isActive && isAlarmSounding && (
              <div className={`${styles.alertItem} flash`}>
                <div className={styles.alertTime}>JUST NOW</div>
                <div className={styles.alertDetails}>
                  <strong>CRITICAL: OBJECT DETECTED</strong>
                  <p>NH-44 (KM 120) - Live tracking object. Alarm sounding.</p>
                  {gpsLocation && (
                    <p style={{ marginTop: '0.5rem', color: '#ffcc00', fontWeight: '900' }}>
                      Exact GPS Coordinates: {gpsLocation.lat}° N, {gpsLocation.lng}° E
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className={styles.alertItem}>
              <div className={styles.alertTime}>10:42 AM</div>
              <div className={styles.alertDetails}>
                <strong>CRITICAL: Cattle on Road</strong>
                <p>NH-44 (KM 120) - 2 Cows detected in left lane.</p>
              </div>
            </div>

            <div className={`${styles.alertItem} warning`}>
              <div className={styles.alertTime}>10:15 AM</div>
              <div className={styles.alertDetails}>
                <strong>WARNING: Animal near shoulder</strong>
                <p>NH-45 (KM 88) - Movement detected 5m from highway.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
