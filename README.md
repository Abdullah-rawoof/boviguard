<div align="center">

<!-- Animated Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,2,3&height=250&section=header&text=🐂%20BOVIGUARD&fontSize=70&fontAlignY=40&desc=Transforming%20highway%20CCTVs%20into%20intelligent,%20life-saving%20guardians.&descAlignY=65&descAlign=50&animation=twinkling" width="100%" alt="Boviguard Header" />

<!-- Tech Icons -->
<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" width="60" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TensorFlow-Dark.svg" width="60" />

<!-- Animated Typing Subtitle -->
<a href="#">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=22&pause=1000&color=FBBF24&center=true&vCenter=true&width=600&lines=AI-Powered+Cattle+Collision+Prevention;Zero-Latency+Edge+Machine+Learning;Neobrutalist+Command+Center+Dashboard" alt="Typing SVG" />
</a>

<!-- Badges -->
<p>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
  <a href="https://www.tensorflow.org/js"><img src="https://img.shields.io/badge/TensorFlow.js-RealTime_AI-FF6F00?style=for-the-badge&logo=tensorflow" alt="TensorFlow.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/UI-Neobrutalism-yellow?style=for-the-badge" alt="Design" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Status-Prototype_Active-brightgreen?style=for-the-badge" alt="Status" /></a>
</p>

</div>

---

## 📖 Table of Contents
- [🚨 The Problem](#-the-problem)
- [💡 The Solution](#-the-solution)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started Locally](#-getting-started-locally)
- [🌍 Deployment Options](#-deployment-options)
- [📚 Further Reading](#-further-reading)

---

## 🚨 The Problem
Every year, thousands of accidents occur on highways due to stray cattle and wildlife wandering onto active lanes. Existing solutions rely on static fences or reactive measures, which are often costly to maintain, slow to alert authorities, and ultimately ineffective at preventing sudden collisions.

## 💡 The Solution
**Boviguard** taps into the existing infrastructure of highway CCTV cameras, upgrading them with edge-based Machine Learning. By detecting cattle in real-time *before* they cross into traffic, Boviguard instantly alerts highway authorities and triggers early warning systems for drivers, saving lives and preventing vehicle damage.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 🧠 **100% Real-Time AI Detection** | Utilizes TensorFlow.js (`coco-ssd`) directly in the browser to analyze webcam/CCTV feeds frame-by-frame with zero latency. |
| 🎯 **Dynamic GPS Tracking** | Taps into the browser's Geolocation API to instantly log the exact latitude and longitude of any critical detection. |
| 🔊 **Smart Audio Alarms** | Uses the Web Audio API to generate high-decibel, pulsing siren warnings automatically when a collision risk is detected. |
| 📊 **Command Center Dashboard** | A fully functional Neobrutalist UI featuring active live feeds, interactive settings, and comprehensive mock analytics. |
| 🎨 **Neobrutalist Aesthetic** | A highly accessible, high-contrast design system optimized for high-stress, command-center environments. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org) bootstrapped with `create-next-app`.
- **Fonts**: Automatically optimized and loaded using `next/font` (featuring [Geist](https://vercel.com/font)).
- **Styling**: Vanilla CSS Modules adhering to a Neobrutalism Design System.
- **Machine Learning**: `@tensorflow/tfjs` & `@tensorflow-models/coco-ssd`.
- **Browser APIs**: Native Web Audio API & HTML5 Geolocation API.

---

## 🚀 Getting Started Locally

1. **Clone and Install Dependencies**
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
