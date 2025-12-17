import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ActivityIcon, BarChart2Icon, CloudIcon, BellIcon, SettingsIcon, HelpCircleIcon, LogOutIcon, MoonIcon, SunIcon, LayoutGridIcon } from 'lucide-react';
const Sidebar = ({
  onLogout,
  theme,
  toggleTheme
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navItems = [{
    name: 'Dashboard',
    icon: <HomeIcon size={20} />,
    path: '/dashboard'
  }, {
    name: 'Analytics',
    icon: <BarChart2Icon size={20} />,
    path: '/dashboard/analytics'
  }, {
    name: 'Health Monitor',
    icon: <ActivityIcon size={20} />,
    path: '/dashboard/health'
  }, {
    name: 'Weather',
    icon: <CloudIcon size={20} />,
    path: '/dashboard/weather'
  }, {
    name: 'Alerts',
    icon: <BellIcon size={20} />,
    path: '/dashboard/alerts'
  }, {
    name: 'Pen Management',
    icon: <LayoutGridIcon size={20} />,
    path: '/dashboard/pen-management'
  }, {
    name: 'Settings',
    icon: <SettingsIcon size={20} />,
    path: '/dashboard/settings'
  }];
  return <aside className={`flex flex-col w-64 h-full ${theme === 'dark' ? 'bg-gray-900/50 backdrop-blur-lg border-gray-800/50' : 'bg-white/90 backdrop-blur-lg border-gray-200'} border-r transition-colors`}>
      <div className="p-4">
        <div className="flex items-center justify-center py-4">
          <div className="w-10 h-10 flex items-center justify-center mr-2">
            <img src="/AppLogo.png" alt="AgriSenso Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white neon-text' : 'text-gray-900'}`}>
              AgriSenso
            </h1>
            <p className={theme === 'dark' ? 'text-xs text-gray-400' : 'text-xs text-gray-500'}>
              Climate-Aware System
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map(item => {
          const isActive =
              item.path === '/dashboard'
                ? pathname === '/dashboard'
                : pathname === item.path || pathname.startsWith(`${item.path}/`);

          return <Link key={item.name} to={item.path} className={`flex items-center px-4 py-3 rounded-lg transition-all ${isActive ? `${theme === 'dark' ? 'bg-green-500/20 text-green-400 border-l-2 border-green-500 neon-border' : 'bg-green-50 text-green-700 border-l-2 border-green-500'}` : `${theme === 'dark' ? 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}`}>
                <span className={isActive ? theme === 'dark' ? 'text-green-400' : 'text-green-600' : theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}>
                  {item.icon}
                </span>
                <span className="ml-3 font-medium">{item.name}</span>
                {item.name === 'Alerts' && <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                    2
                  </span>}
              </Link>;
        })}
        </nav>
      </div>
      <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-800/50' : 'border-gray-200'}`}>
        <div className="space-y-2">
          <div className={`flex items-center justify-between px-4 py-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'} transition-all cursor-pointer`} onClick={toggleTheme} role="button" tabIndex={0} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <>
                <div className="flex items-center">
                  <SunIcon size={20} className="text-gray-500" />
                  <span className="ml-3 font-medium">Light Mode</span>
                </div>
                <div className="theme-toggle"></div>
              </> : <>
                <div className="flex items-center">
                  <MoonIcon size={20} className="text-gray-500" />
                  <span className="ml-3 font-medium">Dark Mode</span>
                </div>
                <div className="theme-toggle"></div>
              </>}
          </div>
          <a href="#help" className={`flex items-center px-4 py-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'} transition-all`}>
            <HelpCircleIcon size={20} className="text-gray-500" />
            <span className="ml-3 font-medium">Help & Support</span>
          </a>
          <button onClick={onLogout} className={`flex items-center w-full px-4 py-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'} transition-all`}>
            <LogOutIcon size={20} className="text-gray-500" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>;
};
export default Sidebar;