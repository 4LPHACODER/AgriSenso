import React from 'react';
import { MapPinIcon, CloudIcon, SunIcon, UmbrellaIcon, ThermometerIcon } from 'lucide-react';
const WeatherWidget = () => {
  return <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
      <div className="flex items-center mb-3">
        <MapPinIcon size={16} className="text-green-700 mr-1" />
        <span className="text-sm font-medium text-gray-800">
          Manila, Philippines
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-gray-800">18°C</div>
          <div className="text-xs text-gray-600 mt-1">
            <div className="flex items-center">
              <ThermometerIcon size={12} className="mr-1" />
              <span>H: 23°C / L: 16°C</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 rounded-full p-3">
          <CloudIcon className="w-10 h-10 text-blue-600" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
        <div className="bg-gray-50 rounded-lg p-2">
          <UmbrellaIcon size={16} className="mx-auto text-blue-600 mb-1" />
          <div className="text-xs font-semibold">40%</div>
          <div className="text-[10px] text-gray-500">Humidity</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <CloudIcon size={16} className="mx-auto text-blue-600 mb-1" />
          <div className="text-xs font-semibold">5.1 ml</div>
          <div className="text-[10px] text-gray-500">Rain</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <SunIcon size={16} className="mx-auto text-yellow-500 mb-1" />
          <div className="text-xs font-semibold">450 hPa</div>
          <div className="text-[10px] text-gray-500">Pressure</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <svg className="w-4 h-4 mx-auto text-blue-600 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
          </svg>
          <div className="text-xs font-semibold">23 m/s</div>
          <div className="text-[10px] text-gray-500">Wind</div>
        </div>
      </div>
      <div className="mt-4 bg-gray-50 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium text-gray-800">
            Crop Growth Index
          </div>
          <div className="flex space-x-1 text-xs">
            <span className="text-green-600 font-medium">+2.4%</span>
          </div>
        </div>
        <div className="h-16 flex items-end space-x-1">
          {[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 75, 70].map((height, index) => <div key={index} className={`w-2 rounded-t-sm ${index > 10 ? 'bg-green-500' : 'bg-green-300'}`} style={{
          height: `${height}%`
        }}></div>)}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Jan</span>
          <span>Apr</span>
          <span>Jul</span>
        </div>
      </div>
    </div>;
};
export default WeatherWidget;