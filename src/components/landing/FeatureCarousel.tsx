import React, { useEffect, useState, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, ActivityIcon, CloudIcon, BellIcon, BarChart2Icon } from 'lucide-react';
const features = [{
  id: 1,
  title: 'Pig Health Monitoring',
  description: 'Advanced AI-powered monitoring system that tracks vital signs, behavior patterns, and health indicators in real-time.',
  icon: <ActivityIcon size={24} className="text-white" />,
  image: '/images/pig_monitor.png',
  color: 'from-green-500 to-emerald-700'
}, {
  id: 2,
  title: 'Weather Intelligence',
  description: 'Predictive weather analytics that helps farmers prepare for climate changes and optimize growing conditions.',
  icon: <CloudIcon size={24} className="text-white" />,
  image: '/images/weather_intell.png',
  color: 'from-blue-500 to-indigo-700'
}, {
  id: 3,
  title: 'Smart Alerts',
  description: 'Receive instant notifications about critical health issues, environmental changes, or feeding anomalies.',
  icon: <BellIcon size={24} className="text-white" />,
  image: '/images/smart_alerts.png',
  color: 'from-amber-500 to-orange-700'
}, {
  id: 4,
  title: 'Advanced Analytics',
  description: 'Comprehensive data analysis and visualization tools to optimize farm operations and improve productivity.',
  icon: <BarChart2Icon size={24} className="text-white" />,
  image: '/images/farm_analytics.png',
  color: 'from-purple-500 to-violet-700'
}];
const FeatureCarousel = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);
  const nextFeature = () => {
    setAutoplay(false);
    setCurrentFeature(prev => (prev + 1) % features.length);
  };
  const prevFeature = () => {
    setAutoplay(false);
    setCurrentFeature(prev => (prev - 1 + features.length) % features.length);
  };
  const feature = features[currentFeature];
  return <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl h-[500px] md:h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div key={feature.id} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }} className="absolute inset-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent z-10" />
            <motion.img initial={{
            scale: 1.1
          }} animate={{
            scale: 1
          }} transition={{
            duration: 6
          }} src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div className="relative z-20 h-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-16">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className={`inline-block bg-gradient-to-r ${feature.color} px-4 py-1 rounded-full text-white text-sm font-medium mb-4`}>
                Feature {currentFeature + 1} of {features.length}
              </motion.div>
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} className="text-4xl md:text-5xl font-bold text-white mb-4">
                {feature.title}
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="text-gray-300 text-lg mb-8">
                {feature.description}
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }}>
                <button className={`bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-medium flex items-center shadow-lg hover:shadow-xl transition-all`}>
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="w-full max-w-md aspect-square relative">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-3xl`} />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 w-full h-full shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className={`mx-auto bg-gradient-to-r ${feature.color} rounded-full w-24 h-24 flex items-center justify-center mb-6`}>
                        {cloneElement(feature.icon, {
                        size: 48
                      })}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-30">
        {features.map((_, index) => <button key={index} onClick={() => {
        setAutoplay(false);
        setCurrentFeature(index);
      }} className={`w-3 h-3 rounded-full transition-all ${currentFeature === index ? 'bg-white scale-125' : 'bg-white/30'}`} aria-label={`Go to feature ${index + 1}`} />)}
      </div>
      <button onClick={prevFeature} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition z-30" aria-label="Previous feature">
        <ChevronLeftIcon size={20} />
      </button>
      <button onClick={nextFeature} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition z-30" aria-label="Next feature">
        <ChevronRightIcon size={20} />
      </button>
    </div>;
};
export default FeatureCarousel;