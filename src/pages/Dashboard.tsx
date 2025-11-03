import React, { useState, Component } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileNav from '../components/layout/MobileNav';
import PigHealthCard from '../components/dashboard/PigHealthCard';
import WeatherCard from '../components/dashboard/WeatherCard';
import AlertsCard from '../components/dashboard/AlertsCard';
import PenManagement from './PenManagement';
import { ArrowRightIcon, BarChart2Icon, CalendarIcon, ClipboardCheckIcon, CreditCardIcon, LayoutDashboardIcon, RefreshCwIcon, UsersIcon, TrendingUpIcon, TrendingDownIcon, ThermometerIcon, AlertCircleIcon, ChevronRightIcon, ActivityIcon, HeartPulseIcon, CloudRainIcon, BellIcon } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Mock data for analytics
const healthTrendData = [{
  month: 'Jan',
  avgTemp: 38.4,
  movement: 72,
  feeding: 85
}, {
  month: 'Feb',
  avgTemp: 38.5,
  movement: 75,
  feeding: 82
}, {
  month: 'Mar',
  avgTemp: 38.3,
  movement: 78,
  feeding: 88
}, {
  month: 'Apr',
  avgTemp: 38.6,
  movement: 70,
  feeding: 80
}, {
  month: 'May',
  avgTemp: 38.7,
  movement: 65,
  feeding: 75
}, {
  month: 'Jun',
  avgTemp: 38.9,
  movement: 60,
  feeding: 72
}, {
  month: 'Jul',
  avgTemp: 39.0,
  movement: 55,
  feeding: 70
}, {
  month: 'Aug',
  avgTemp: 38.8,
  movement: 62,
  feeding: 78
}];
const alertsData = [{
  name: 'Health Issues',
  value: 12,
  color: '#ef4444'
}, {
  name: 'Weather Alerts',
  value: 8,
  color: '#f59e0b'
}, {
  name: 'System Warnings',
  value: 5,
  color: '#3b82f6'
}, {
  name: 'Feed Alerts',
  value: 3,
  color: '#22c55e'
}];
const weatherData = [{
  month: 'Jan',
  temperature: 22,
  humidity: 65,
  rainfall: 15
}, {
  month: 'Feb',
  temperature: 24,
  humidity: 68,
  rainfall: 12
}, {
  month: 'Mar',
  temperature: 25,
  humidity: 70,
  rainfall: 20
}, {
  month: 'Apr',
  temperature: 27,
  humidity: 72,
  rainfall: 25
}, {
  month: 'May',
  temperature: 28,
  humidity: 75,
  rainfall: 30
}, {
  month: 'Jun',
  temperature: 30,
  humidity: 78,
  rainfall: 10
}, {
  month: 'Jul',
  temperature: 31,
  humidity: 80,
  rainfall: 5
}, {
  month: 'Aug',
  temperature: 30,
  humidity: 75,
  rainfall: 18
}];
const animalDistribution = [{
  name: 'Healthy',
  value: 42,
  color: '#22c55e'
}, {
  name: 'Monitoring',
  value: 7,
  color: '#f59e0b'
}, {
  name: 'Treatment',
  value: 2,
  color: '#ef4444'
}];
const Dashboard = ({
  onLogout,
  theme,
  toggleTheme
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Dashboard Overview Component
  const DashboardOverview = () => <>
      <div className="mb-6">
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center`}>
          <div>
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Dashboard Overview
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              Welcome back! Here's what's happening on your farm today.
            </p>
          </div>
          <div className="flex mt-4 sm:mt-0 space-x-2">
            <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
              <CalendarIcon size={16} className="mr-1.5" />
              <span>Feb 15, 2025</span>
            </button>
            <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
              <RefreshCwIcon size={16} className="mr-1.5" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className={`${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-200/70'} rounded-xl p-4 border shadow-sm transition-colors`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Livestock
              </div>
              <div className={`${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'} p-2 rounded-lg`}>
                <UsersIcon size={18} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              51
            </div>
            <div className={`flex items-center mt-1 text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              <ArrowRightIcon size={12} className="mr-1" />
              <span>View details</span>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-200/70'} rounded-xl p-4 border shadow-sm transition-colors`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Active Alerts
              </div>
              <div className={`${theme === 'dark' ? 'bg-red-500/20' : 'bg-red-100'} p-2 rounded-lg`}>
                <ClipboardCheckIcon size={18} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              3
            </div>
            <div className={`flex items-center mt-1 text-xs ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
              <ArrowRightIcon size={12} className="mr-1" />
              <span>Resolve now</span>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-200/70'} rounded-xl p-4 border shadow-sm transition-colors`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Today's Temp.
              </div>
              <div className={`${theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100'} p-2 rounded-lg`}>
                <BarChart2Icon size={18} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              28°C
            </div>
            <div className={`flex items-center mt-1 text-xs ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
              <ArrowRightIcon size={12} className="mr-1" />
              <span>View forecast</span>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-200/70'} rounded-xl p-4 border shadow-sm transition-colors`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Feed Stock
              </div>
              <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} p-2 rounded-lg`}>
                <CreditCardIcon size={18} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              85%
            </div>
            <div className={`flex items-center mt-1 text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              <ArrowRightIcon size={12} className="mr-1" />
              <span>Order more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <PigHealthCard theme={theme} />
        <WeatherCard theme={theme} />
        <div className="xl:col-span-1 md:col-span-2 col-span-1">
          <AlertsCard theme={theme} />
        </div>
      </div>
      <div className={`${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white border-gray-200/70'} rounded-xl p-4 border shadow-sm mb-6 transition-colors`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Recent Activity
          </h2>
          <Link to="#" className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {[{
          time: '2 hours ago',
          event: 'Temperature alert detected in Pen 3'
        }, {
          time: '4 hours ago',
          event: 'Feed dispensed to all pens'
        }, {
          time: '6 hours ago',
          event: 'Water quality check completed'
        }, {
          time: '8 hours ago',
          event: 'System maintenance performed'
        }].map((activity, index) => <div key={index} className={`flex items-center p-2 ${theme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'} rounded-lg transition-colors`}>
              <div className={`w-2 h-2 rounded-full ${index === 0 ? theme === 'dark' ? 'bg-red-400' : 'bg-red-600' : theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} mr-3`}></div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {activity.event}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  {activity.time}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </>;
  // Analytics component
  const Analytics = () => <div className="mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Farm Analytics
        </h2>
        <div className="flex space-x-2">
          <select className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-700 border-gray-200'} border transition-colors`}>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
          <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
            <RefreshCwIcon size={16} className="mr-1.5" />
            <span>Refresh</span>
          </button>
        </div>
      </div>
      {/* Health Insights Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors p-4`}>
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} mr-3`}>
            <HeartPulseIcon size={20} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
          </div>
          <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Pig Health Trends
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <div className="flex justify-between items-center mb-2">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Average Temperature
              </div>
              <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                <TrendingDownIcon size={16} className="mr-1" />
                <span>-0.2°C</span>
              </div>
            </div>
            <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              38.5°C
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthTrendData}>
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}°C`, 'Temperature']} />
                  <Line type="monotone" dataKey="avgTemp" stroke={theme === 'dark' ? '#ef4444' : '#dc2626'} strokeWidth={2} dot={{
                  r: 3
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <div className="flex justify-between items-center mb-2">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Movement Activity
              </div>
              <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                <TrendingDownIcon size={16} className="mr-1" />
                <span>-8%</span>
              </div>
            </div>
            <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              67%
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthTrendData}>
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}%`, 'Activity']} />
                  <Line type="monotone" dataKey="movement" stroke={theme === 'dark' ? '#3b82f6' : '#2563eb'} strokeWidth={2} dot={{
                  r: 3
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <div className="flex justify-between items-center mb-2">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Feeding Rate
              </div>
              <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                <TrendingUpIcon size={16} className="mr-1" />
                <span>+3%</span>
              </div>
            </div>
            <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              78%
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthTrendData}>
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}%`, 'Feeding']} />
                  <Line type="monotone" dataKey="feeding" stroke={theme === 'dark' ? '#22c55e' : '#16a34a'} strokeWidth={2} dot={{
                  r: 3
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
              <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                Monthly Health Indicators
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={healthTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
                    <XAxis dataKey="month" tick={{
                    fontSize: 12,
                    fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                  }} />
                    <YAxis tick={{
                    fontSize: 12,
                    fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                  }} />
                    <Tooltip contentStyle={{
                    backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                    color: theme === 'dark' ? '#fff' : '#111827'
                  }} />
                    <Legend />
                    <Bar name="Temperature (°C)" dataKey="avgTemp" fill={theme === 'dark' ? '#ef4444' : '#dc2626'} />
                    <Bar name="Movement (%)" dataKey="movement" fill={theme === 'dark' ? '#3b82f6' : '#2563eb'} />
                    <Bar name="Feeding (%)" dataKey="feeding" fill={theme === 'dark' ? '#22c55e' : '#16a34a'} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Animal Health Status
            </h3>
            <div className="h-64 flex flex-col justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie data={animalDistribution} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                  name,
                  percent
                }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {animalDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={(value, name) => [`${value} animals`, name]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-4 mt-2">
                {animalDistribution.map((item, index) => <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-1" style={{
                  backgroundColor: item.color
                }}></div>
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Weather Analysis Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors p-4`}>
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'} mr-3`}>
            <CloudRainIcon size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
          </div>
          <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Weather Pattern Analysis
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Temperature & Humidity Trends
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
                  <XAxis dataKey="month" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis yAxisId="left" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis yAxisId="right" orientation="right" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="temperature" name="Temperature (°C)" stroke={theme === 'dark' ? '#f59e0b' : '#d97706'} strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="humidity" name="Humidity (%)" stroke={theme === 'dark' ? '#3b82f6' : '#2563eb'} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Monthly Rainfall
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
                  <XAxis dataKey="month" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value} mm`, 'Rainfall']} />
                  <defs>
                    <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme === 'dark' ? '#3b82f6' : '#2563eb'} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={theme === 'dark' ? '#3b82f6' : '#2563eb'} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="rainfall" name="Rainfall (mm)" stroke={theme === 'dark' ? '#3b82f6' : '#2563eb'} fill="url(#rainfallGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            Weather Impact on Livestock Health
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-3 ${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg border transition-colors`}>
              <div className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                Temperature Correlation
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                High temperatures (&gt;30°C) correlate with a 15% decrease in
                movement activity and 8% decrease in feeding.
              </div>
            </div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg border transition-colors`}>
              <div className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                Humidity Effects
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Humidity levels above 75% show correlation with increased
                respiratory issues in livestock during summer months.
              </div>
            </div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg border transition-colors`}>
              <div className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                Rainfall Impact
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Periods following heavy rainfall (&gt;25mm) show 12% increase in
                health alerts, primarily related to environmental conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Alert Analytics Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors p-4`}>
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} mr-3`}>
            <AlertCircleIcon size={20} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
          </div>
          <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Alert Analysis
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors md:col-span-2`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Alert Distribution by Type
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={alertsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
                  <XAxis type="number" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis dataKey="name" type="category" tick={{
                  fontSize: 12,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} width={100} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value} alerts`, 'Count']} />
                  <Bar dataKey="value">
                    {alertsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Alert Summary
            </h3>
            <div className="space-y-4">
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Total Alerts
                </div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  28
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                  <TrendingDownIcon size={14} className="mr-1" />
                  <span>12% decrease from last month</span>
                </div>
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Average Response Time
                </div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  42 min
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                  <TrendingDownIcon size={14} className="mr-1" />
                  <span>8 min faster than last month</span>
                </div>
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Resolution Rate
                </div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  94%
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                  <TrendingUpIcon size={14} className="mr-1" />
                  <span>3% increase from last month</span>
                </div>
              </div>
            </div>
            <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'}`}>
              <Link to="/dashboard/alerts" className={`w-full flex items-center justify-center py-2 ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white rounded-lg transition-colors text-sm`}>
                <span>View All Alerts</span>
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Health component
  const Health = () => <div className="mb-6">
      <PigHealthCard detailed={true} theme={theme} />
    </div>;
  // Weather component
  const Weather = () => <div className="mb-6">
      <WeatherCard detailed={true} theme={theme} />
    </div>;
  // Alerts component
  const Alerts = () => <div className="mb-6">
      <AlertsCard detailed={true} theme={theme} />
    </div>;
  // Settings component
  const Settings = () => <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border border-gray-700/50' : 'bg-white backdrop-blur-xl border border-gray-200'} rounded-xl p-6 mb-6 transition-colors`}>
      <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}>
        Settings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/80'} rounded-lg p-4 border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'} transition-colors`}>
          <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-3`}>
            User Settings
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Profile Information
              </span>
              <button className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded-md transition-colors`}>
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Security Settings
              </span>
              <button className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded-md transition-colors`}>
                Manage
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Notification Preferences
              </span>
              <button className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded-md transition-colors`}>
                Configure
              </button>
            </div>
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/80'} rounded-lg p-4 border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'} transition-colors`}>
          <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-3`}>
            System Settings
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Theme Mode
              </span>
              <div className="theme-toggle" onClick={toggleTheme} role="button" tabIndex={0} aria-label="Toggle theme">
                <span className="sr-only">
                  {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Language
              </span>
              <select className={`${theme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-700 border-gray-300'} rounded-md px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-green-500`}>
                <option>English</option>
                <option>Filipino</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Data Storage
              </span>
              <button className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded-md transition-colors`}>
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Settings Section */}
      <div className={`mt-6 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/80'} rounded-lg p-4 border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'} transition-colors`}>
        <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-3`}>
          Farm System Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-white'} transition-colors`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Automatic Feeding
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Schedule automated feeding times
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-white'} transition-colors`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Climate Control
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Automatic temperature adjustment
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-white'} transition-colors`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  AI Health Alerts
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Real-time health monitoring
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-white'} transition-colors`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Data Backup
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Automatic cloud backup
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800'} relative overflow-hidden transition-colors`}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-24 w-96 h-96 ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-500/5'} rounded-full blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-1/3 -right-20 w-80 h-80 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'} rounded-full blur-3xl animate-pulse-slow animation-delay-2000`}></div>
        <div className={`absolute top-2/3 left-1/3 w-72 h-72 ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/5'} rounded-full blur-3xl animate-pulse-slow animation-delay-4000`}></div>
      </div>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={toggleSidebar}></div>}
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} theme={theme} toggleTheme={toggleTheme} />
      {/* Main content area with sidebar */}
      <div className="flex flex-1 relative">
        {/* Sidebar - mobile */}
        <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <Sidebar onLogout={onLogout} theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/* Sidebar - desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Sidebar onLogout={onLogout} theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto pb-16 lg:pb-0 relative z-10">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/health" element={<Health />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/pen-management/*" element={<PenManagement theme={theme} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>
      {/* Footer */}
      <Footer theme={theme} />
      {/* Mobile navigation */}
      <MobileNav theme={theme} />
    </div>;
};
export default Dashboard;