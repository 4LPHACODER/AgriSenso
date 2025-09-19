import React, { cloneElement } from 'react';
const Navigation = ({
  activeTab,
  setActiveTab,
  tabs
}) => {
  return <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-100">
      <div className="flex justify-between px-2 max-w-md mx-auto">
        {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center py-3 px-4 relative ${activeTab === tab.id ? 'text-green-600' : 'text-gray-500'}`}>
            {activeTab === tab.id && <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-600"></div>}
            <div className={`p-1.5 rounded-full ${activeTab === tab.id ? 'bg-green-100' : 'bg-transparent'}`}>
              {cloneElement(tab.icon, {
            className: activeTab === tab.id ? 'text-green-600' : 'text-gray-500',
            size: 18
          })}
            </div>
            <span className="text-xs mt-1 font-medium">{tab.label}</span>
          </button>)}
      </div>
    </nav>;
};
export default Navigation;