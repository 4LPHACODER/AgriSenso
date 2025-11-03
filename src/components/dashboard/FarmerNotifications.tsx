import React, { useState } from 'react';
import { BellIcon, MessageSquareIcon, CheckIcon, XIcon, ExternalLinkIcon, ThermometerIcon, DropletIcon, FanIcon, ShieldIcon } from 'lucide-react';
const notifications = [{
  id: 1,
  type: 'action',
  title: 'Increase ventilation',
  description: 'Due to forecasted heat, increase barn ventilation for the next 48 hours',
  time: '1 hour ago',
  priority: 'high',
  icon: <FanIcon size={16} />,
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop',
  penId: 1
}, {
  id: 2,
  type: 'action',
  title: 'Check water supply',
  description: 'Ensure adequate water supply in Pen 3 due to increased temperature',
  time: '3 hours ago',
  priority: 'medium',
  icon: <DropletIcon size={16} />,
  image: 'https://images.unsplash.com/photo-1593179357196-070b9775f4ed?q=80&w=1974&auto=format&fit=crop',
  penId: 3
}, {
  id: 3,
  type: 'info',
  title: 'Feed delivery scheduled',
  description: 'Your feed order will be delivered tomorrow at 9:00 AM',
  time: '5 hours ago',
  priority: 'low',
  icon: <ShieldIcon size={16} />,
  image: null,
  penId: null
}];
const NotificationModal = ({
  notification,
  onClose
}) => {
  return <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <div className={`rounded-full p-2 mr-2 ${notification.priority === 'high' ? 'bg-red-100 text-red-600' : notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
              {notification.icon}
            </div>
            <h3 className="font-medium text-gray-800">{notification.title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full p-1.5">
            <XIcon size={16} />
          </button>
        </div>
        {notification.image && <div className="relative">
            <img src={notification.image} alt={notification.title} className="w-full h-auto" />
            {notification.penId && <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                Pen {notification.penId}
              </div>}
          </div>}
        <div className="p-4">
          <p className="text-gray-600 mb-4">{notification.description}</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <CheckIcon size={16} className="text-green-600 mr-2" />
              Recommended Actions:
            </h4>
            <ul className="text-sm text-gray-600 space-y-3">
              {notification.type === 'action' && notification.title === 'Increase ventilation' && <>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Open all ventilation ports in the affected barn area
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Turn on supplementary cooling fans if available
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Monitor temperature every 4 hours</span>
                    </li>
                  </>}
              {notification.type === 'action' && notification.title === 'Check water supply' && <>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Verify all water nipples are functioning properly
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Increase water availability by 20% during peak heat
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-md">
                      <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Check water quality and temperature</span>
                    </li>
                  </>}
              {notification.type === 'info' && <li className="flex items-start bg-white p-2 rounded-md">
                  <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No action required. This is for your information.</span>
                </li>}
            </ul>
          </div>
          <div className="flex space-x-3">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors shadow-sm">
              <CheckIcon size={16} className="mr-1" />
              Mark as Done
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
              <XIcon size={16} className="mr-1" />
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const FarmerNotifications = ({
  showDetailed = false
}) => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const openNotification = notification => {
    setSelectedNotification(notification);
  };
  const closeNotification = () => {
    setSelectedNotification(null);
  };
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <MessageSquareIcon size={20} className="text-green-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">
            Farmer Notifications
          </h2>
        </div>
        {!showDetailed && <span className="text-xs text-blue-600 font-medium cursor-pointer">
            View all
          </span>}
      </div>
      <div className="space-y-3">
        {notifications.slice(0, showDetailed ? undefined : 2).map(notification => <div key={notification.id} className="rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {notification.image && <div className="relative h-32 bg-gray-100">
                  <img src={notification.image} alt={notification.title} className="w-full h-full object-cover" />
                  {notification.penId && <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Pen {notification.penId}
                    </div>}
                  <div className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-xs font-medium ${notification.priority === 'high' ? 'bg-red-100 text-red-600' : notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                    {notification.priority === 'high' ? 'Urgent' : notification.priority === 'medium' ? 'Important' : 'Info'}
                  </div>
                </div>}
              <div className="p-3">
                <div className="flex items-start">
                  <div className={`rounded-full p-2 mr-3 flex-shrink-0 ${notification.priority === 'high' ? 'bg-red-100 text-red-600' : notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                    {notification.icon || <BellIcon size={16} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                        {notification.time}
                      </span>
                      <div className="flex space-x-2">
                        {notification.type === 'action' && <>
                            <button className="flex items-center justify-center bg-green-100 text-green-600 rounded-full p-1.5 hover:bg-green-200 transition-colors">
                              <CheckIcon size={14} />
                            </button>
                            <button className="flex items-center justify-center bg-gray-100 text-gray-600 rounded-full p-1.5 hover:bg-gray-200 transition-colors">
                              <XIcon size={14} />
                            </button>
                          </>}
                        <button className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-1.5 hover:bg-blue-200 transition-colors" onClick={() => openNotification(notification)}>
                          <ExternalLinkIcon size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
      </div>
      {selectedNotification && <NotificationModal notification={selectedNotification} onClose={closeNotification} />}
      {showDetailed && <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <BellIcon size={16} className="text-green-600 mr-2" />
            Notification Settings
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center bg-white p-2 rounded-md">
              <input type="checkbox" id="email-notif" className="mr-2" checked />
              <label htmlFor="email-notif" className="text-sm text-gray-600">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <input type="checkbox" id="sms-notif" className="mr-2" checked />
              <label htmlFor="sms-notif" className="text-sm text-gray-600">
                SMS Alerts
              </label>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <input type="checkbox" id="urgent-notif" className="mr-2" checked />
              <label htmlFor="urgent-notif" className="text-sm text-gray-600">
                Urgent Alerts Only
              </label>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md">
              <input type="checkbox" id="daily-digest" className="mr-2" />
              <label htmlFor="daily-digest" className="text-sm text-gray-600">
                Daily Digest
              </label>
            </div>
          </div>
        </div>}
    </div>;
};
export default FarmerNotifications;