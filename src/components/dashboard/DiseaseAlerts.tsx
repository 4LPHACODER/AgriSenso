import React, { useState } from 'react';
import { AlertCircleIcon, ChevronRightIcon, MicroscopeIcon, XIcon, ZoomInIcon, PlayIcon, ShieldIcon } from 'lucide-react';
const alerts = [{
  id: 1,
  title: 'Possible Early PRRS Signs',
  description: 'Slight increase in temperature and decreased movement in Pen 3',
  severity: 'medium',
  time: '2 hours ago',
  image: 'https://images.unsplash.com/photo-1593179357196-070b9775f4ed?q=80&w=1974&auto=format&fit=crop',
  penId: 3
}, {
  id: 2,
  title: 'Respiratory Pattern Change',
  description: 'Breathing pattern changes detected in 3 pigs in Pen 5',
  severity: 'low',
  time: '5 hours ago',
  image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=2070&auto=format&fit=crop',
  penId: 5
}];
const ImageModal = ({
  image,
  title,
  onClose
}) => {
  return <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-medium text-gray-800 flex items-center">
            <MicroscopeIcon size={16} className="text-purple-600 mr-2" />
            {title}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full p-1.5">
            <XIcon size={16} />
          </button>
        </div>
        <div className="relative">
          <img src={image} alt={title} className="w-full h-auto" />
          <button className="absolute bottom-4 right-4 bg-green-600 text-white rounded-full p-2 flex items-center text-sm shadow-lg hover:bg-green-700 transition-colors">
            <PlayIcon size={16} className="mr-1" />
            <span>Play Video Analysis</span>
          </button>
        </div>
        <div className="p-4 bg-gray-50">
          <div className="mb-3">
            <div className="flex items-center mb-2">
              <ShieldIcon size={16} className="text-purple-600 mr-2" />
              <h4 className="font-medium text-gray-800">AI Analysis Report</h4>
            </div>
            <p className="text-sm text-gray-600">
              Our AI system has detected potential health concerns based on
              visual and behavioral patterns. The confidence level of this
              detection is 87%. We recommend consulting with your veterinarian
              for a proper diagnosis and treatment plan.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
            <div className="font-medium mb-1">Recommended Actions:</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Monitor affected animals closely for the next 24 hours</li>
              <li>Separate affected animals if possible</li>
              <li>Schedule veterinary inspection</li>
              <li>Review recent feed and water quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
const DiseaseAlerts = ({
  showDetailed = false
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = alert => {
    setSelectedImage(alert);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <MicroscopeIcon size={20} className="text-purple-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">AI Disease Alerts</h2>
        </div>
        {!showDetailed && <span className="text-xs text-blue-600 font-medium cursor-pointer">
            View all
          </span>}
      </div>
      <div className="space-y-3">
        {alerts.map(alert => <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${alert.severity === 'high' ? 'border-red-500 bg-red-50' : alert.severity === 'medium' ? 'border-yellow-500 bg-yellow-50' : 'border-blue-500 bg-blue-50'} shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex">
              <div className="flex-1 mr-3">
                <div className="flex items-center">
                  <AlertCircleIcon size={16} className={`mr-1 ${alert.severity === 'high' ? 'text-red-500' : alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'}`} />
                  <h3 className="font-medium text-gray-800">{alert.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {alert.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500 bg-white/50 px-2 py-0.5 rounded-full">
                    {alert.time}
                  </span>
                  <button className="text-xs text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors" onClick={() => openImage(alert)}>
                    View Analysis
                    <ChevronRightIcon size={14} className="ml-1" />
                  </button>
                </div>
              </div>
              <div className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0 shadow-sm">
                <img src={alert.image} alt={alert.title} className="w-full h-full object-cover" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity" onClick={() => openImage(alert)}>
                  <ZoomInIcon size={20} className="text-white" />
                </button>
                <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  Pen {alert.penId}
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {showDetailed && <div className="mt-4 bg-purple-50 rounded-lg p-3">
          <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <ShieldIcon size={16} className="text-purple-600 mr-2" />
            Disease Prevention Tips
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Maintain strict biosecurity protocols at farm entry points
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Clean and disinfect equipment regularly
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Monitor water quality and feed storage conditions
            </li>
          </ul>
        </div>}
      {selectedImage && <ImageModal image={selectedImage.image} title={selectedImage.title} onClose={closeImage} />}
    </div>;
};
export default DiseaseAlerts;