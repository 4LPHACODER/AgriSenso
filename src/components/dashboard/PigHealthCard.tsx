import React, { useEffect, useState, useRef } from 'react';
import { ActivityIcon, ThermometerIcon, DropletIcon, CoffeeIcon, HeartPulseIcon, CheckCircleIcon, AlertTriangleIcon, ChevronRightIcon, ChevronLeftIcon, PlayIcon, PauseIcon, MaximizeIcon, VolumeXIcon, SettingsIcon, InfoIcon } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
// Mock data
const tempData = [{
  time: '6am',
  value: 38.2
}, {
  time: '9am',
  value: 38.5
}, {
  time: '12pm',
  value: 38.7
}, {
  time: '3pm',
  value: 38.8
}, {
  time: '6pm',
  value: 38.6
}, {
  time: '9pm',
  value: 38.4
}];
const movementData = [{
  time: '6am',
  value: 65
}, {
  time: '9am',
  value: 80
}, {
  time: '12pm',
  value: 70
}, {
  time: '3pm',
  value: 60
}, {
  time: '6pm',
  value: 75
}, {
  time: '9pm',
  value: 55
}];
const feedingData = [{
  time: '6am',
  value: 25
}, {
  time: '9am',
  value: 85
}, {
  time: '12pm',
  value: 90
}, {
  time: '3pm',
  value: 40
}, {
  time: '6pm',
  value: 80
}, {
  time: '9pm',
  value: 30
}];
const cameraFeeds = [{
  id: 1,
  name: 'Pen 1',
  image: '/images/Pen1.png',
  video: '/images/Pen1.mp4',
  status: 'healthy',
  pigCount: 12,
  avgTemp: '38.4°C'
}, {
  id: 2,
  name: 'Pen 2',
  image: '/images/Pen2.png',
  video: '/images/Pen2.mp4',
  status: 'healthy',
  pigCount: 14,
  avgTemp: '38.2°C'
}, {
  id: 3,
  name: 'Pen 3',
  image: '/images/Pen3.png',
  video: '/images/Pen3.mp4',
  status: 'at-risk',
  pigCount: 10,
  avgTemp: '39.1°C'
}, {
  id: 4,
  name: 'Pen 4',
  image: '/images/Pen4.png',
  video: '/images/Pen4.mp4',
  status: 'healthy',
  pigCount: 15,
  avgTemp: '38.3°C'
}];
const StatusIndicator = ({
  status,
  theme
}) => {
  let color, icon, label, bgColor;
  switch (status) {
    case 'healthy':
      color = theme === 'dark' ? 'text-green-400' : 'text-green-600';
      bgColor = theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100';
      icon = <CheckCircleIcon size={16} className="mr-1" />;
      label = 'Healthy';
      break;
    case 'at-risk':
      color = theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
      bgColor = theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100';
      icon = <AlertTriangleIcon size={16} className="mr-1" />;
      label = 'At Risk';
      break;
    case 'critical':
      color = theme === 'dark' ? 'text-red-400' : 'text-red-600';
      bgColor = theme === 'dark' ? 'bg-red-500/20' : 'bg-red-100';
      icon = <AlertTriangleIcon size={16} className="mr-1" />;
      label = 'Critical';
      break;
    default:
      color = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
      bgColor = theme === 'dark' ? 'bg-gray-500/20' : 'bg-gray-200';
      icon = <CheckCircleIcon size={16} className="mr-1" />;
      label = 'Unknown';
  }
  return <div className={`flex items-center px-3 py-1 rounded-full ${bgColor} ${color}`}>
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>;
};
const LiveVideoFeed = ({
  feed,
  theme
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const videoRef = useRef(null);
  // Update current time every second to simulate live feed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const formatTime = date => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  return <div className={`relative w-full h-full overflow-hidden rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <video ref={videoRef} src={feed.video} className="w-full h-full object-cover" autoPlay loop muted={isMuted} playsInline />
      {/* Video overlay with controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></div>
            LIVE
          </div>
          <div className="ml-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {feed.name}
          </div>
          <div className="ml-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {feed.pigCount} pigs
          </div>
        </div>
        <div>
          <StatusIndicator status={feed.status} theme={theme} />
        </div>
      </div>
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-white text-xs bg-black/70 px-2 py-1 rounded-full">
            {formatTime(currentTime)}
          </div>
          <div className="text-white text-xs bg-black/70 px-2 py-1 rounded-full flex items-center">
            <ThermometerIcon size={12} className="mr-1" />
            Avg: {feed.avgTemp}
          </div>
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button onClick={togglePlay} className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
              {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
            </button>
            <button onClick={toggleMute} className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors" aria-label={isMuted ? 'Unmute' : 'Mute'}>
              <VolumeXIcon size={16} />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors" aria-label="Settings">
              <SettingsIcon size={16} />
            </button>
            <button className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors" aria-label="Fullscreen">
              <MaximizeIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const CameraCarousel = ({
  feeds,
  theme
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex(current => (current + 1) % feeds.length);
  };
  const prevSlide = () => {
    setActiveIndex(current => (current - 1 + feeds.length) % feeds.length);
  };
  const activeFeed = feeds[activeIndex];
  return <div className="mt-4 mb-4">
      <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2 flex items-center`}>
        <HeartPulseIcon size={16} className={`mr-1 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
        Live Health Monitoring
      </h3>
      <div className="relative rounded-lg overflow-hidden aspect-video shadow-md">
        <LiveVideoFeed feed={activeFeed} theme={theme} />
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition z-10" aria-label="Previous pen">
          <ChevronLeftIcon size={18} />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition z-10" aria-label="Next pen">
          <ChevronRightIcon size={18} />
        </button>
      </div>
      <div className="flex justify-center mt-3 space-x-2 overflow-x-auto pb-1">
        {feeds.map((feed, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`relative rounded-md overflow-hidden w-16 h-12 border-2 transition-all ${index === activeIndex ? `border-${theme === 'dark' ? 'green-500' : 'green-600'} scale-110 ${theme === 'dark' ? 'neon-border' : 'shadow-md'}` : 'border-transparent opacity-70'}`} aria-label={`Switch to ${feed.name}`}>
            <img src={feed.image} alt={`Thumbnail ${feed.name}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[8px] px-1 rounded-sm">
              {feed.name}
            </div>
            {index === activeIndex && <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>}
          </button>)}
      </div>
    </div>;
};
const PigHealthCard = ({
  detailed = false,
  theme = 'dark'
}) => {
  return <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} mr-2`}>
              <ActivityIcon size={20} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
            </div>
            <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Pig Health Monitor
            </h2>
          </div>
          <StatusIndicator status="healthy" theme={theme} />
        </div>
        <CameraCarousel feeds={cameraFeeds} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-3 transition-colors`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <ThermometerIcon size={18} className={theme === 'dark' ? 'text-red-400 mr-2' : 'text-red-600 mr-2'} />
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Temperature
                </span>
              </div>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                38.6°C
              </span>
            </div>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tempData} margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme === 'dark' ? '#ef4444' : '#f87171'} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={theme === 'dark' ? '#ef4444' : '#f87171'} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} width={25} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}°C`, 'Temperature']} />
                  <Area type="monotone" dataKey="value" stroke={theme === 'dark' ? '#ef4444' : '#dc2626'} fillOpacity={1} fill="url(#tempGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-medium">Normal range:</span> 38.0°C - 39.0°C
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-3 transition-colors`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <ActivityIcon size={18} className={theme === 'dark' ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Movement
                </span>
              </div>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Normal
              </span>
            </div>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={movementData} margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}>
                  <XAxis dataKey="time" tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} width={25} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}%`, 'Activity Level']} />
                  <Line type="monotone" dataKey="value" stroke={theme === 'dark' ? '#3b82f6' : '#2563eb'} strokeWidth={2} dot={{
                  fill: theme === 'dark' ? '#3b82f6' : '#2563eb',
                  r: 3
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-medium">Current activity:</span> 75% of
              baseline
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-3 transition-colors`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CoffeeIcon size={18} className={theme === 'dark' ? 'text-green-400 mr-2' : 'text-green-600 mr-2'} />
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Feeding
                </span>
              </div>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Good
              </span>
            </div>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={feedingData} margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}>
                  <defs>
                    <linearGradient id="feedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme === 'dark' ? '#22c55e' : '#16a34a'} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={theme === 'dark' ? '#22c55e' : '#16a34a'} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <YAxis tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} width={25} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}%`, 'Feeding Activity']} />
                  <Area type="monotone" dataKey="value" stroke={theme === 'dark' ? '#22c55e' : '#16a34a'} fillOpacity={1} fill="url(#feedGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-medium">Daily consumption:</span> 3.2 kg/pig
            </div>
          </div>
        </div>
        {detailed && <div className={`mt-4 ${theme === 'dark' ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'} rounded-lg p-4 transition-colors`}>
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'} mb-3 flex items-center`}>
              <HeartPulseIcon size={16} className={`mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              Health Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckCircleIcon size={14} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  All vital signs within normal range
                  <div className="text-xs mt-1 opacity-80">
                    Last checked: 15 minutes ago
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckCircleIcon size={14} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Feeding patterns consistent
                  <div className="text-xs mt-1 opacity-80">
                    3.2 kg/pig daily average
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckCircleIcon size={14} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Activity levels normal
                  <div className="text-xs mt-1 opacity-80">
                    75% of baseline activity
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                  <CheckCircleIcon size={14} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  No abnormal behaviors detected
                  <div className="text-xs mt-1 opacity-80">
                    Continuous monitoring active
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-4 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-lg p-3 flex items-start`}>
              <InfoIcon size={16} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mr-2 mt-0.5 flex-shrink-0`} />
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                The AI health monitoring system is continuously analyzing pig
                behavior, movement patterns, and physiological indicators to
                detect early signs of health issues. Currently, all 51 pigs
                across 4 pens are showing normal health patterns.
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default PigHealthCard;