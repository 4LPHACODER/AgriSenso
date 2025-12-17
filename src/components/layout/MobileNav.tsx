import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ActivityIcon, BarChart2Icon, CloudIcon, BellIcon, LayoutGridIcon } from 'lucide-react';
const MobileNav = ({
  theme
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
    name: 'Health',
    icon: <ActivityIcon size={20} />,
    path: '/dashboard/health'
  }, {
    name: 'Weather',
    icon: <CloudIcon size={20} />,
    path: '/dashboard/weather'
  }, {
    name: 'Alerts',
    icon: <BellIcon size={20} />,
    path: '/dashboard/alerts',
    badge: 2
  }, {
    name: 'Pens',
    icon: <LayoutGridIcon size={20} />,
    path: '/dashboard/pen-management'
  }];
  return <nav className={`lg:hidden fixed bottom-0 left-0 right-0 ${theme === 'dark' ? 'bg-gray-900/90 backdrop-blur-lg border-gray-800/50' : 'bg-white/90 backdrop-blur-lg border-gray-200'} border-t z-30 transition-colors`}>
      <div className="grid grid-cols-6 h-16">
        {navItems.map(item => {
        const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
        return <Link key={item.name} to={item.path} className="flex flex-col items-center justify-center">
              <div className={`p-1.5 rounded-full ${isActive ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600' : theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {item.icon}
              </div>
              <span className={`text-xs mt-1 ${isActive ? theme === 'dark' ? 'text-green-400' : 'text-green-600' : theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {item.name}
              </span>
              {item.badge && <span className="absolute top-2 right-6 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
                  {item.badge}
                </span>}
            </Link>;
      })}
      </div>
    </nav>;
};
export default MobileNav;