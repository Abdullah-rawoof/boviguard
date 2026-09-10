This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<div align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" width="80" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TensorFlow-Dark.svg" width="80" />
  <br/>
  
  # 🐂 BOVIGUARD
  **AI-Powered Cattle Collision Prevention Platform**
## Getting Started
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-RealTime_AI-FF6F00?style=for-the-badge&logo=tensorflow)](https://www.tensorflow.org/js)
  [![Design](https://img.shields.io/badge/UI-Neobrutalism-yellow?style=for-the-badge)](#)
  [![Status](https://img.shields.io/badge/Status-Prototype_Active-brightgreen?style=for-the-badge)](#)
First, run the development server:
  *Transforming existing highway CCTV networks into intelligent, life-saving guardians.*
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
  ---
</div>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## 🚨 The Problem
Every year, thousands of accidents occur on highways due to stray cattle and wildlife wandering onto active lanes. Existing solutions rely on static fences or reactive measures, which are often costly and ineffective.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
## 💡 The Solution
**Boviguard** taps into the existing infrastructure of highway CCTV cameras, upgrading them with edge-based Machine Learning. By detecting cattle in real-time before they cross into traffic, Boviguard can instantly alert highway authorities and trigger early warning systems for drivers.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
---
## Learn More
## ✨ Key Features
To learn more about Next.js, take a look at the following resources:
- 🧠 **100% Real-Time AI Detection**: Utilizes TensorFlow.js (`coco-ssd`) directly in the browser to analyze webcam/CCTV feeds frame-by-frame with zero latency.
- 🎯 **Dynamic GPS Tracking**: Taps into the browser's Geolocation API to instantly log the exact latitude and longitude of any critical detection.
- 🔊 **Smart Audio Alarms**: Uses the Web Audio API to generate high-decibel, pulsing siren warnings automatically when a collision risk is detected.
- 📊 **Command Center Dashboard**: A fully functional Neobrutalist UI featuring active live feeds, interactive settings, and comprehensive mock analytics.
- 🎨 **Neobrutalist Aesthetic**: A highly accessible, high-contrast design system optimized for high-stress, command-center environments.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
---
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
## 🛠️ Tech Stack
## Deploy on Vercel
- **Framework**: Next.js (App Router)
- **Styling**: Vanilla CSS Modules (Neobrutalism Design System)
- **Machine Learning**: `@tensorflow/tfjs` & `@tensorflow-models/coco-ssd`
- **Audio**: Native Web Audio API
- **Location**: HTML5 Geolocation API
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
---
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## 🚀 Getting Started Locally
1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Run the Development Server**
   ```bash
   npm run dev
   ```
3. **View the Prototype**
   Open [http://localhost:3000](http://localhost:3000) in your browser. Navigate to the **Dashboard** and click **"Activate Security System"** to test the live AI webcam tracking.
---
## 🌍 Deployment Options
### Recommended: Deploying to Vercel (Easiest)
Since this project is built with Next.js, deploying to Vercel is highly recommended for zero-configuration, lightning-fast hosting.
1. Push this project to a repository on **GitHub**.
2. Go to [Vercel.com](https://vercel.com/) and log in with your GitHub account.
3. Click **"Add New Project"** and select your Boviguard GitHub repository.
4. Leave all settings as default (Framework Preset: Next.js) and click **Deploy**.
5. Within 2 minutes, your AI prototype will be live and accessible globally!
### Alternative: GitHub Pages (Requires Config)
*Note: Because this project uses the Next.js App Router, deploying to GitHub Pages requires exporting the project as a static site.*
1. In `next.config.mjs`, add `output: 'export'`.
2. Update `package.json` build script to `next build`.
3. Use a GitHub Action workflow to build and deploy the `out` folder to the `gh-pages` branch.
---
<div align="center">
  <i>Designed and engineered for the safety of our highways.</i>
</div>
