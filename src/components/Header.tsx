import React from 'react';
import { MenuIcon, UserIcon, BellIcon, LeafIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-gradient-to-r from-green-600 to-blue-500 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-3 bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
            <MenuIcon size={20} />
          </button>
          <div className="flex items-center">
            <LeafIcon size={22} className="mr-2 text-white" />
            <div>
              <h1 className="text-xl font-bold">AgriSenso</h1>
              <p className="text-xs opacity-90">
                Climate-Aware Pig Health System
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors relative">
            <BellIcon size={20} />
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>
          <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors">
            <UserIcon size={18} className="mr-2" />
            <span className="text-sm font-medium">Farmer Account</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div className="bg-white/20 px-3 py-1 rounded-full text-sm mr-2">
          Today: Optimal growing conditions
        </div>
        <div className="bg-yellow-500/80 px-3 py-1 rounded-full text-sm text-white flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          Heat warning for tomorrow
        </div>
      </div>
    </header>;
};
export default Header;