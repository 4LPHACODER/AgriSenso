import React, { useState } from 'react';
import { AlertCircleIcon, ChevronRightIcon, MicroscopeIcon, XIcon, ZoomInIcon, PlayIcon, ShieldIcon, AlertTriangleIcon, BellIcon, CheckIcon, ClockIcon, CalendarIcon, ArrowRightIcon, InfoIcon } from 'lucide-react';
// Mock data
const alerts = [{
  id: 1,
  title: 'Possible Early PRRS Signs',
  description: 'Slight increase in temperature and decreased movement in Pen 3',
  severity: 'medium',
  time: '2 hours ago',
  date: '2025-02-15T14:30:00',
  image: '/images/Pen3.png',
  penId: 3,
  affectedCount: 2,
  confidenceLevel: 87,
  detectedBy: 'AI Vision System'
}, {
  id: 2,
  title: 'Respiratory Pattern Change',
  description: 'Breathing pattern changes detected in 3 pigs in Pen 5',
  severity: 'low',
  time: '5 hours ago',
  date: '2025-02-15T11:15:00',
  image: '/images/Pen2.png',
  penId: 5,
  affectedCount: 3,
  confidenceLevel: 72,
  detectedBy: 'Audio Analysis'
}, {
  id: 3,
  title: 'Heat Stress Warning',
  description: 'Potential heat stress conditions predicted for tomorrow',
  severity: 'high',
  time: '1 hour ago',
  date: '2025-02-15T15:45:00',
  image: '/images/Pen4.png',
  penId: 1,
  affectedCount: 12,
  confidenceLevel: 94,
  detectedBy: 'Weather Integration'
}];
const ImageModal = ({
  alert,
  onClose,
  theme
}) => {
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };
  return <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className={`${theme === 'dark' ? 'bg-gray-900/90 backdrop-blur-xl border-gray-700/50' : 'bg-white/95 backdrop-blur-xl border-gray-200'} rounded-lg overflow-hidden max-w-lg w-full shadow-xl border transition-colors`}>
        <div className={`flex justify-between items-center p-4 border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'}`}>
          <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} flex items-center`}>
            <MicroscopeIcon size={16} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
            {alert.title}
          </h3>
          <button onClick={onClose} className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 bg-gray-800/70' : 'text-gray-500 hover:text-gray-700 bg-gray-100'} rounded-full p-1.5 transition-colors`} aria-label="Close">
            <XIcon size={16} />
          </button>
        </div>
        <div className="relative">
          <img src={alert.image} alt={alert.title} className="w-full h-auto" />
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            Pen {alert.penId}
          </div>
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <ClockIcon size={12} className="mr-1" />
            {formatDate(alert.date)}
          </div>
          <button className={`absolute bottom-4 right-4 ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-full p-2 flex items-center text-sm shadow-lg transition-colors`}>
            <PlayIcon size={16} className="mr-1" />
            <span>Play Video Analysis</span>
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <ShieldIcon size={16} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
              <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                AI Analysis Report
              </h4>
            </div>
            <div className={`grid grid-cols-2 gap-3 mb-3 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'} rounded-lg p-3`}>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Confidence Level
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {alert.confidenceLevel}%
                </div>
              </div>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Affected Animals
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {alert.affectedCount} pigs
                </div>
              </div>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Detection Method
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {alert.detectedBy}
                </div>
              </div>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  First Detected
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {alert.time}
                </div>
              </div>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Our AI system has detected potential health concerns based on
              visual and behavioral patterns. The confidence level of this
              detection is {alert.confidenceLevel}%. We recommend consulting
              with your veterinarian for a proper diagnosis and treatment plan.
            </p>
          </div>
          <div className={`${theme === 'dark' ? 'bg-yellow-900/20 border-yellow-700/30' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-3 text-sm transition-colors`}>
            <div className={`font-medium mb-2 ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'}`}>
              Recommended Actions:
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckIcon size={12} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
                </div>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Monitor affected animals closely for the next 24 hours
                </span>
              </li>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckIcon size={12} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
                </div>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Separate affected animals if possible
                </span>
              </li>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckIcon size={12} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
                </div>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Schedule veterinary inspection
                </span>
              </li>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckIcon size={12} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
                </div>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Review recent feed and water quality
                </span>
              </li>
            </ul>
          </div>
          <div className="flex space-x-3 mt-4">
            <button className={`flex-1 ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white py-2 rounded-lg flex items-center justify-center transition-colors shadow-sm`}>
              <CheckIcon size={16} className="mr-1" />
              Mark as Done
            </button>
            <button className={`flex-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} py-2 rounded-lg flex items-center justify-center transition-colors shadow-sm`}>
              <XIcon size={16} className="mr-1" />
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const AlertsCard = ({
  detailed = false,
  theme = 'dark'
}) => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const openAlert = alert => {
    setSelectedAlert(alert);
  };
  const closeAlert = () => {
    setSelectedAlert(null);
  };
  const getSeverityColors = severity => {
    if (theme === 'dark') {
      return {
        high: {
          border: 'border-red-500',
          bg: 'bg-red-500/10',
          text: 'text-red-400',
          icon: 'text-red-400'
        },
        medium: {
          border: 'border-yellow-500',
          bg: 'bg-yellow-500/10',
          text: 'text-yellow-400',
          icon: 'text-yellow-400'
        },
        low: {
          border: 'border-blue-500',
          bg: 'bg-blue-500/10',
          text: 'text-blue-400',
          icon: 'text-blue-400'
        }
      }[severity];
    } else {
      return {
        high: {
          border: 'border-red-500',
          bg: 'bg-red-50',
          text: 'text-red-700',
          icon: 'text-red-600'
        },
        medium: {
          border: 'border-yellow-500',
          bg: 'bg-yellow-50',
          text: 'text-yellow-700',
          icon: 'text-yellow-600'
        },
        low: {
          border: 'border-blue-500',
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          icon: 'text-blue-600'
        }
      }[severity];
    }
  };
  return <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} mr-2`}>
              <AlertCircleIcon size={20} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
            </div>
            <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              AI Disease Alerts
            </h2>
          </div>
          {!detailed && <span className={`text-xs ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} font-medium cursor-pointer hover:underline`}>
              View all
            </span>}
        </div>
        <div className="space-y-3">
          {alerts.slice(0, detailed ? undefined : 2).map(alert => {
          const colors = getSeverityColors(alert.severity);
          return <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${colors.border} ${colors.bg} shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 mr-3">
                    <div className="flex items-center">
                      <AlertTriangleIcon size={16} className={`mr-1 ${colors.icon}`} />
                      <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {alert.title}
                      </h3>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-1`}>
                      {alert.description}
                    </p>
                    <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400 bg-gray-800/50' : 'text-gray-500 bg-gray-100'} px-2 py-0.5 rounded-full flex items-center`}>
                          <ClockIcon size={10} className="mr-1" />
                          {alert.time}
                        </span>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400 bg-gray-800/50' : 'text-gray-500 bg-gray-100'} px-2 py-0.5 rounded-full`}>
                          {alert.affectedCount}{' '}
                          {alert.affectedCount === 1 ? 'animal' : 'animals'}
                        </span>
                        <span className={`text-xs ${alert.severity === 'high' ? theme === 'dark' ? 'text-red-400 bg-red-900/30' : 'text-red-700 bg-red-100' : alert.severity === 'medium' ? theme === 'dark' ? 'text-yellow-400 bg-yellow-900/30' : 'text-yellow-700 bg-yellow-100' : theme === 'dark' ? 'text-blue-400 bg-blue-900/30' : 'text-blue-700 bg-blue-100'} px-2 py-0.5 rounded-full`}>
                          {alert.severity === 'high' ? 'Urgent' : alert.severity === 'medium' ? 'Important' : 'Info'}
                        </span>
                      </div>
                      <button className={`text-xs ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} font-medium flex items-center transition-colors`} onClick={() => openAlert(alert)}>
                        View Analysis
                        <ChevronRightIcon size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full sm:w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0 shadow-sm mt-2 sm:mt-0">
                    <img src={alert.image} alt={alert.title} className="w-full h-full object-cover" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity" onClick={() => openAlert(alert)} aria-label="View alert details">
                      <ZoomInIcon size={20} className="text-white" />
                    </button>
                    <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      Pen {alert.penId}
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>
        {detailed && <div className={`mt-4 ${theme === 'dark' ? 'bg-purple-900/20 border border-purple-700/30' : 'bg-purple-50 border border-purple-200'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-300' : 'text-purple-800'} mb-3 flex items-center`}>
              <ShieldIcon size={16} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
              Disease Prevention Tips
            </h3>
            <ul className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Maintain strict biosecurity protocols at farm entry points
                  <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Disinfect boots, equipment, and vehicles
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Clean and disinfect equipment regularly
                  <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Recommended frequency: Daily
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Monitor water quality and feed storage conditions
                  <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Test water weekly, check feed daily
                  </div>
                </div>
              </li>
            </ul>
            <div className={`mt-3 pt-3 border-t ${theme === 'dark' ? 'border-purple-700/30' : 'border-purple-200'} flex items-start`}>
              <InfoIcon size={16} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mr-2 mt-0.5 flex-shrink-0`} />
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Our AI system continuously monitors your livestock for early
                signs of disease. Early detection and intervention can reduce
                treatment costs by up to 60% and prevent spread to healthy
                animals.
              </div>
            </div>
            <div className="mt-4">
              <button className={`w-full ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'} py-2 rounded-lg flex items-center justify-center transition-colors`}>
                <span>Schedule Veterinary Consultation</span>
                <ArrowRightIcon size={16} className="ml-2" />
              </button>
            </div>
          </div>}
        {selectedAlert && <ImageModal alert={selectedAlert} onClose={closeAlert} theme={theme} />}
      </div>
    </div>;
};
export default AlertsCard;