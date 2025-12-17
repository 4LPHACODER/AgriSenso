import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ThermometerIcon, ActivityIcon, CoffeeIcon, AlertTriangleIcon, CheckCircleIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon, HeartPulseIcon, PauseIcon, MaximizeIcon, VolumeXIcon, SettingsIcon } from 'lucide-react';
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
// Updated camera feeds with real pig farm images/videos
const cameraFeeds = [{
  id: 1,
  name: 'Pen 1',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop',
  video: 'https://player.vimeo.com/progressive_redirect/playback/692511188/rendition/720p/file.mp4?loc=external&signature=b6f297cf4a5a95f786635ad0c0cc04c634f7a9f84c9f9350d5b73b7f93fd6cbf',
  status: 'healthy'
}, {
  id: 2,
  name: 'Pen 2',
  image: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=2071&auto=format&fit=crop',
  video: 'https://player.vimeo.com/progressive_redirect/playback/693668818/rendition/720p/file.mp4?loc=external&signature=9cdb6ca9a0e1fe5ef184d0d58e31d8b1b9a2a9f9afedcd98e08e76e9a46fdf9d',
  status: 'healthy'
}, {
  id: 3,
  name: 'Pen 3',
  image: 'https://images.unsplash.com/photo-1593179357196-070b9775f4ed?q=80&w=1974&auto=format&fit=crop',
  video: 'https://player.vimeo.com/progressive_redirect/playback/693669003/rendition/720p/file.mp4?loc=external&signature=9d4c7d26fbb1e45333dc3b185ff1cfdae503b5e30d9d4df6ce9d8f0859b83d6c',
  status: 'at-risk'
}, {
  id: 4,
  name: 'Pen 4',
  image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=2070&auto=format&fit=crop',
  video: 'https://player.vimeo.com/progressive_redirect/playback/693668906/rendition/720p/file.mp4?loc=external&signature=e97b5582dd9c9a73d7c2e5ee5c43996c8c0cd71ce8c35aa18ae49f83de769b0c',
  status: 'healthy'
}];
const StatusIndicator = ({
  status
}) => {
  let color, icon, label;
  switch (status) {
    case 'healthy':
      color = 'bg-green-100 text-green-700';
      icon = <CheckCircleIcon size={16} className="mr-1" />;
      label = 'Healthy';
      break;
    case 'at-risk':
      color = 'bg-yellow-100 text-yellow-700';
      icon = <AlertTriangleIcon size={16} className="mr-1" />;
      label = 'At Risk';
      break;
    case 'critical':
      color = 'bg-red-100 text-red-700';
      icon = <AlertTriangleIcon size={16} className="mr-1" />;
      label = 'Critical';
      break;
    default:
      color = 'bg-gray-100 text-gray-700';
      icon = <CheckCircleIcon size={16} className="mr-1" />;
      label = 'Unknown';
  }
  return <div className={`flex items-center px-3 py-1 rounded-full ${color}`}>
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>;
};
const LiveVideoFeed = ({
  feed
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
  return <div className="relative w-full h-full overflow-hidden rounded-lg bg-black">
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
        </div>
        <div>
          <StatusIndicator status={feed.status} />
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
            23°C
          </div>
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button onClick={togglePlay} className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors">
              {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
            </button>
            <button onClick={toggleMute} className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors">
              <VolumeXIcon size={16} />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors">
              <SettingsIcon size={16} />
            </button>
            <button className="bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors">
              <MaximizeIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const CameraCarousel = ({
  feeds
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
      <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
        <HeartPulseIcon size={16} className="mr-1 text-red-500" />
        Live Health Monitoring
      </h3>
      <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-video shadow-md">
        <LiveVideoFeed feed={activeFeed} />
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition z-10">
          <ChevronLeftIcon size={18} />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition z-10">
          <ChevronRightIcon size={18} />
        </button>
      </div>
      <div className="flex justify-center mt-3 space-x-2">
        {feeds.map((feed, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`relative rounded-md overflow-hidden w-16 h-12 border-2 transition-all ${index === activeIndex ? 'border-green-600 scale-110' : 'border-transparent opacity-70'}`}>
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
const PigHealthMonitor = ({
  showDetailed = false
}) => {
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <ActivityIcon size={20} className="text-green-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">
            Pig Health Monitor
          </h2>
        </div>
        <StatusIndicator status="healthy" />
      </div>
      <CameraCarousel feeds={cameraFeeds} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
          <div className="flex items-center mb-2">
            <ThermometerIcon size={18} className="text-red-500 mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Temperature
                </span>
                <span className="text-sm font-bold text-gray-800">38.6°C</span>
              </div>
            </div>
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
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{
                fontSize: 10
              }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#tempGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
          <div className="flex items-center mb-2">
            <ActivityIcon size={18} className="text-blue-500 mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Movement
                </span>
                <span className="text-sm font-bold text-gray-800">Normal</span>
              </div>
            </div>
          </div>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={movementData} margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5
            }}>
                <defs>
                  <linearGradient id="moveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{
                fontSize: 10
              }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#moveGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
          <div className="flex items-center mb-2">
            <CoffeeIcon size={18} className="text-green-500 mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Feeding
                </span>
                <span className="text-sm font-bold text-gray-800">Good</span>
              </div>
            </div>
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
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{
                fontSize: 10
              }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#22c55e" fillOpacity={1} fill="url(#feedGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {showDetailed && <div className="mt-4 bg-blue-50 rounded-lg p-3 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Health Summary
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <CheckCircleIcon size={14} className="text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                All vital signs within normal range
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <CheckCircleIcon size={14} className="text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                Feeding patterns consistent
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <CheckCircleIcon size={14} className="text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                Activity levels normal
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <CheckCircleIcon size={14} className="text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                No abnormal behaviors detected
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
export default PigHealthMonitor;