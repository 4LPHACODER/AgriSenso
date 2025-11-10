# 🌱 AgriSenso  
_A Climate-Aware Pig Health and Weather Intelligence System_  

AgriSenso is an innovative platform designed to help farmers protect their pigs and livelihood.  
By combining **AI**, **IoT-powered cameras**, and **real-time weather data**, AgriSenso provides predictive insights and actionable solutions for pig health management.  

---

## 🚀 Features
- 📷 **Smart Camera Simulation** – Track pig temperature, movement, and feeding patterns.  
- 🤖 **AI-Based Disease Detection** – Identify early signs of illness (mocked for now).  
- 🌦️ **Weather Intelligence** – Integrates weather APIs to predict risks like heat stress, cold snaps, and floods.  
- 📲 **Real-Time Alerts** – Sends instant notifications and actionable advice.  
- 📊 **Analytics Dashboard** – Provides insights into pig health trends, climate conditions, feed, and water supply.  
- 🐖 **Pen & Pig Tracker** – Add/manage pens, pigs (with identifiers, color tags, and names).  
- 🌾 **Resource Management** – Track feed stock and water supply, and assign them to pigs or pens.  
- 🎨 **Modern UI/UX** – Futuristic dashboard with light/dark theme support.  

---

## 📂 Project Structure

AgriSenso
├── public
├── src
│ ├── components
│ │ ├── layout # Header, Sidebar, Footer
│ │ ├── dashboard # Feature widgets (Pig Health, Weather, Alerts, Analytics)
│ │ └── ui # Reusable UI components
│ ├── context # React Contexts (Alerts, Weather, etc.)
│ ├── hooks # Custom hooks (useWeather, usePigHealth)
│ ├── pages # Dashboard, Analytics, Settings, Login, Signup
│ ├── styles # Global CSS & Tailwind styles
│ ├── types # TypeScript types
│ ├── utils # Helper functions
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts


---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/AgriSenso.git
   cd AgriSenso

    Install dependencies

npm install

Run the development server

npm run dev

Open http://localhost:5173

    in your browser.

🎨 UI/UX Design Principles

    Futuristic design with light/dark mode toggle

    Smooth animations and responsive layouts

    Clear separation of features via dashboard cards

    Carousel/flying animations on landing page

📈 Roadmap

Setup React + TypeScript + Tailwind + Vite

Basic Dashboard Layout (Header, Sidebar, Footer)

Pig Health, Weather, and Alerts Widgets

Analytics with charts and graphs

Login & Signup with authentication flow

Pen/Pig Tracker with feed & water management

    Offline support for farmers in remote areas

📜 License

This project is licensed under the MIT License.
👥 Contributors

    System Analyst – Shane D. Onsing

    Business User – Justine Searaspe

    Developer – Carl El Cedrik T. Rebosura
