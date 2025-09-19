import React from 'react';
import { MapPinIcon, ArrowUpRightIcon, LeafIcon, SunIcon, DropletIcon } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import MembershipInfo from './MembershipInfo';
const Hero = () => {
  return <div className="relative min-h-screen w-full bg-cover bg-center" style={{
    backgroundImage: 'url(https://uploadthingy.s3.us-west-1.amazonaws.com/8mEGGpPnN89fBnm9jmAC6M/download.jpg)'
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      <div className="relative z-1 max-w-7xl mx-auto px-4 pt-32 pb-20 h-full flex flex-col justify-between">
        {/* Top section with location */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center max-w-max shadow-lg">
            <MapPinIcon size={20} className="text-green-700 mr-2" />
            <span className="text-gray-800 font-medium">
              Manila, Rizal Park 1000, Philippines
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <WeatherWidget />
          </div>
        </div>
        {/* Bottom section with content */}
        <div className="mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <MembershipInfo />
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg">
                    <div className="bg-green-100 rounded-full w-10 h-10 mx-auto flex items-center justify-center mb-2">
                      <LeafIcon size={20} className="text-green-700" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Organic Farming
                    </h3>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg">
                    <div className="bg-blue-100 rounded-full w-10 h-10 mx-auto flex items-center justify-center mb-2">
                      <DropletIcon size={20} className="text-blue-700" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Water Management
                    </h3>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg">
                    <div className="bg-yellow-100 rounded-full w-10 h-10 mx-auto flex items-center justify-center mb-2">
                      <SunIcon size={20} className="text-yellow-700" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Solar Energy
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-green-600 text-white px-4 py-1 rounded-full inline-block mb-4 shadow-lg">
                WELCOME TO AGRISENSO
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                Sustainable
                <br />
                Smart Farming
              </h1>
              <p className="text-white text-lg mb-8 max-w-lg drop-shadow-md bg-black/10 backdrop-blur-sm rounded-lg p-4">
                Experience the future of agriculture with our climate-aware
                technology, expert insights, and sustainable farming solutions
                that help you grow better, smarter, and more efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#join" className="bg-green-600 text-white px-6 py-3 rounded-full font-medium flex items-center shadow-lg hover:bg-green-700 transition-colors">
                  Join Now
                  <span className="ml-2 bg-white/20 rounded-full p-1">
                    <ArrowUpRightIcon size={16} className="text-white" />
                  </span>
                </a>
                <a href="#learn" className="bg-white text-green-800 px-6 py-3 rounded-full font-medium flex items-center shadow-lg hover:bg-green-50 transition-colors">
                  Explore Services
                  <span className="ml-2 bg-green-600 rounded-full p-1">
                    <ArrowUpRightIcon size={16} className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;