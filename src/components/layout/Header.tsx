import React, { useState } from 'react';
import { MenuIcon, BellIcon, SearchIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
const Header = ({
  toggleSidebar,
  theme,
  toggleTheme
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  return <header className={`${theme === 'dark' ? 'bg-gray-900/50 backdrop-blur-lg border-gray-800/50' : 'bg-white/80 backdrop-blur-lg border-gray-200'} border-b py-3 px-4 lg:px-6 sticky top-0 z-30 transition-colors`}>
      <div className="flex items-center justify-between">
        {/* Left side - Logo and toggle */}
        <div className="flex items-center">
          <button onClick={toggleSidebar} className={`lg:hidden p-2 mr-3 ${theme === 'dark' ? 'text-gray-400 hover:text-white bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 bg-gray-100'} rounded-lg`} aria-label="Toggle sidebar">
            <MenuIcon size={20} />
          </button>
          <div className="flex items-center lg:hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-1.5 mr-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              AgriSenso
            </h1>
          </div>
        </div>
        {/* Center - Search (desktop) */}
        <div className="hidden md:block flex-1 max-w-xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
            </div>
            <input type="text" placeholder="Search..." className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 text-gray-100' : 'bg-gray-100 border-gray-200 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-colors`} />
          </div>
        </div>
        {/* Right side - Actions */}
        <div className="flex items-center space-x-2">
          {/* Mobile search toggle */}
          <button onClick={() => setShowMobileSearch(!showMobileSearch)} className={`md:hidden p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 bg-gray-100'} rounded-lg`} aria-label={showMobileSearch ? 'Close search' : 'Open search'}>
            {showMobileSearch ? <XIcon size={20} /> : <SearchIcon size={20} />}
          </button>
          {/* Theme toggle */}
          <button onClick={toggleTheme} className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 bg-gray-100'} rounded-lg`} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          {/* Notifications */}
          <button className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 bg-gray-100'} rounded-lg relative`} aria-label="Notifications">
            <BellIcon size={20} />
            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>
          {/* User profile */}
          <div className="flex items-center">
            <div className="hidden sm:block mr-3">
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                John Doe
              </div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                Farm Manager
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </div>
      </div>
      {/* Mobile search (expandable) */}
      {showMobileSearch && <div className="md:hidden mt-3 animate-fadeIn">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
            </div>
            <input type="text" placeholder="Search..." className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 text-gray-100' : 'bg-gray-100 border-gray-200 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-colors`} />
          </div>
        </div>}
    </header>;
};
export default Header;