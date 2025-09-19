import React, { useState } from 'react';
import { HomeIcon, ActivityIcon, CloudRainIcon, BellIcon, SettingsIcon } from 'lucide-react';
import Header from './components/Header';
import PigHealthMonitor from './components/dashboard/PigHealthMonitor';
import DiseaseAlerts from './components/dashboard/DiseaseAlerts';
import WeatherIntelligence from './components/dashboard/WeatherIntelligence';
import FarmerNotifications from './components/dashboard/FarmerNotifications';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showLanding, setShowLanding] = useState(true);
  if (showLanding) {
    return <div className="relative">
        <LandingPage />
        <button onClick={() => setShowLanding(false)} className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center">
          <span className="mr-2">Go to Dashboard</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>;
  }
  return <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <main className="flex-1 overflow-y-auto pb-16 px-4 md:px-6 py-2">
        {activeTab === 'home' && <div className="max-w-7xl mx-auto space-y-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <PigHealthMonitor />
              <DiseaseAlerts />
            </div>
            <WeatherIntelligence />
            <FarmerNotifications />
          </div>}
        {activeTab === 'health' && <div className="max-w-7xl mx-auto py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <ActivityIcon size={20} className="mr-2 text-green-600" />
              Pig Health Details
            </h2>
            <div className="space-y-4">
              <PigHealthMonitor showDetailed={true} />
              <DiseaseAlerts showDetailed={true} />
            </div>
          </div>}
        {activeTab === 'weather' && <div className="max-w-7xl mx-auto py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <CloudRainIcon size={20} className="mr-2 text-blue-600" />
              Weather Intelligence
            </h2>
            <WeatherIntelligence showDetailed={true} />
          </div>}
        {activeTab === 'alerts' && <div className="max-w-7xl mx-auto py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <BellIcon size={20} className="mr-2 text-yellow-600" />
              All Notifications
            </h2>
            <FarmerNotifications showDetailed={true} />
          </div>}
        {activeTab === 'settings' && <div className="max-w-7xl mx-auto py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <SettingsIcon size={20} className="mr-2 text-gray-600" />
              Settings
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-3">
                    Account Settings
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">
                        Profile Information
                      </label>
                      <button className="text-xs text-blue-600">Edit</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">
                        Password & Security
                      </label>
                      <button className="text-xs text-blue-600">Change</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">
                        Notification Preferences
                      </label>
                      <button className="text-xs text-blue-600">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-3">
                    System Settings
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">Language</label>
                      <select className="text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1">
                        <option>English</option>
                        <option>Filipino</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">Dark Mode</label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input type="checkbox" id="toggle" className="sr-only" />
                        <div className="block bg-gray-300 w-10 h-5 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-600">
                        Data Storage
                      </label>
                      <button className="text-xs text-blue-600">Manage</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={[{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon size={20} />
    }, {
      id: 'health',
      label: 'Health',
      icon: <ActivityIcon size={20} />
    }, {
      id: 'weather',
      label: 'Weather',
      icon: <CloudRainIcon size={20} />
    }, {
      id: 'alerts',
      label: 'Alerts',
      icon: <BellIcon size={20} />
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={20} />
    }]} />
      <button onClick={() => setShowLanding(true)} className="fixed bottom-20 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors">
        Back to Landing
      </button>
    </div>;
}