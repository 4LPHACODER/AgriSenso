import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, LeafIcon, CheckCircleIcon } from 'lucide-react';
const Hero = () => {
  return <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      {/* Animated background dots and lines */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-smart-city-12640-large.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full inline-block mb-6 shadow-lg shadow-green-500/20">
              NEXT-GEN AGRICULTURAL TECHNOLOGY
            </motion.div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              The Future of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Smart Farming
              </span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-xl text-gray-300 mb-8 max-w-lg">
              Experience the future of agriculture with our climate-aware
              technology. Monitor pig health, track environmental conditions,
              and optimize your farm operations with AI-powered insights.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-wrap gap-4">
              <Link to="/signup" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all">
                Get Started
                <span className="ml-2 bg-white/20 rounded-full p-1">
                  <ArrowUpRightIcon size={16} className="text-white" />
                </span>
              </Link>
              <Link to="/login" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-white/20 transition-colors">
                Sign In
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="mt-8 grid grid-cols-2 gap-4">
              {['Real-time health monitoring', 'Weather prediction', 'Smart alerts & notifications', 'Data-driven insights'].map((feature, index) => <div key={index} className="flex items-center">
                  <div className="bg-green-500/20 rounded-full p-1 mr-2">
                    <CheckCircleIcon size={16} className="text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>)}
            </motion.div>
          </div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" />
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-2">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/images/Pen1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center mr-2">
                      <img src="/AppLogo.png" alt="AgriSenso Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">
                        AgriSenso Dashboard
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Real-time monitoring
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 text-xs font-medium">
                      LIVE
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{
                  label: 'Temperature',
                  value: '24°C',
                  color: 'bg-amber-500/20 text-amber-400'
                }, {
                  label: 'Humidity',
                  value: '65%',
                  color: 'bg-blue-500/20 text-blue-400'
                }, {
                  label: 'Health',
                  value: 'Optimal',
                  color: 'bg-green-500/20 text-green-400'
                }].map((stat, index) => <div key={index} className="bg-white/5 rounded-lg p-3">
                      <div className={`${stat.color} rounded-full px-2 py-0.5 text-xs inline-block mb-1`}>
                        {stat.label}
                      </div>
                      <div className="text-white font-bold text-lg">
                        {stat.value}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;