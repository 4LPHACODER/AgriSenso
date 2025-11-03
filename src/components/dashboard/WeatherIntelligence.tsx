import React from 'react';
import { CloudRainIcon, SunIcon, UmbrellaIcon, ThermometerIcon, DropletIcon, WindIcon, CalendarIcon, AlertTriangleIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, LineChart, Line } from 'recharts';
// Mock data
const weeklyForecast = [{
  day: 'Mon',
  temp: 28,
  humidity: 65,
  rain: 0,
  icon: 'sun'
}, {
  day: 'Tue',
  temp: 29,
  humidity: 70,
  rain: 0,
  icon: 'sun'
}, {
  day: 'Wed',
  temp: 30,
  humidity: 75,
  rain: 20,
  icon: 'cloud'
}, {
  day: 'Thu',
  temp: 27,
  humidity: 80,
  rain: 60,
  icon: 'rain'
}, {
  day: 'Fri',
  temp: 26,
  humidity: 75,
  rain: 30,
  icon: 'cloud'
}, {
  day: 'Sat',
  temp: 28,
  humidity: 65,
  rain: 10,
  icon: 'cloud'
}, {
  day: 'Sun',
  temp: 29,
  humidity: 60,
  rain: 0,
  icon: 'sun'
}];
const temperatureData = [{
  time: '00:00',
  value: 24
}, {
  time: '03:00',
  value: 23
}, {
  time: '06:00',
  value: 22
}, {
  time: '09:00',
  value: 25
}, {
  time: '12:00',
  value: 28
}, {
  time: '15:00',
  value: 29
}, {
  time: '18:00',
  value: 27
}, {
  time: '21:00',
  value: 25
}];
const humidityData = [{
  time: '00:00',
  value: 70
}, {
  time: '03:00',
  value: 75
}, {
  time: '06:00',
  value: 80
}, {
  time: '09:00',
  value: 70
}, {
  time: '12:00',
  value: 65
}, {
  time: '15:00',
  value: 60
}, {
  time: '18:00',
  value: 65
}, {
  time: '21:00',
  value: 70
}];
const getWeatherIcon = icon => {
  switch (icon) {
    case 'sun':
      return <SunIcon size={24} className="text-yellow-500" />;
    case 'cloud':
      return <CloudRainIcon size={24} className="text-gray-500" />;
    case 'rain':
      return <UmbrellaIcon size={24} className="text-blue-500" />;
    default:
      return <SunIcon size={24} className="text-yellow-500" />;
  }
};
const WeatherAlert = ({
  type,
  message
}) => {
  const bgColor = type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100';
  const textColor = type === 'warning' ? 'text-yellow-800' : 'text-blue-800';
  const borderColor = type === 'warning' ? 'border-yellow-300' : 'border-blue-300';
  const iconColor = type === 'warning' ? 'text-yellow-500' : 'text-blue-500';
  return <div className={`${bgColor} ${textColor} border ${borderColor} rounded-lg p-3 flex items-start`}>
      <AlertTriangleIcon size={18} className={`${iconColor} mr-2 mt-0.5 flex-shrink-0`} />
      <div>
        <h4 className="font-medium">
          {type === 'warning' ? 'Weather Warning' : 'Weather Advisory'}
        </h4>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>;
};
const WeatherIntelligence = ({
  showDetailed = false
}) => {
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <CloudRainIcon size={20} className="text-blue-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">
            Weather Intelligence
          </h2>
        </div>
        {!showDetailed && <span className="text-xs text-blue-600 font-medium cursor-pointer">
            View Details
          </span>}
      </div>
      {/* Weather Alerts */}
      <div className="space-y-3 mb-5">
        <WeatherAlert type="warning" message="High temperatures expected tomorrow. Ensure adequate water supply for livestock." />
        {showDetailed && <WeatherAlert type="info" message="Favorable conditions for crop growth in the next 3 days." />}
      </div>
      {/* Current Conditions */}
      <div className="bg-blue-50 rounded-lg p-4 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-700">
            Current Conditions
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon size={14} className="mr-1" />
            <span>Today</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white rounded-lg p-3 mr-4">
            <SunIcon size={32} className="text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">28°C</div>
            <div className="text-sm text-gray-600">Sunny, feels like 30°C</div>
          </div>
          <div className="ml-auto grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <DropletIcon size={16} className="text-blue-500 mr-1" />
              <div className="text-sm">
                <div className="font-medium">65%</div>
                <div className="text-xs text-gray-500">Humidity</div>
              </div>
            </div>
            <div className="flex items-center">
              <WindIcon size={16} className="text-blue-500 mr-1" />
              <div className="text-sm">
                <div className="font-medium">12 km/h</div>
                <div className="text-xs text-gray-500">Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Weekly Forecast */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          7-Day Forecast
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {weeklyForecast.map((day, index) => <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-xs font-medium text-gray-500">{day.day}</div>
              <div className="my-1">{getWeatherIcon(day.icon)}</div>
              <div className="text-sm font-medium">{day.temp}°C</div>
              {showDetailed && <div className="text-xs text-gray-500 mt-1">{day.rain}%</div>}
            </div>)}
        </div>
      </div>
      {/* Charts */}
      {(showDetailed || !showDetailed) && <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Temperature (24h)
          </h3>
          <div className="h-32 mb-5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={temperatureData} margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5
          }}>
                <defs>
                  <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{
              fontSize: 10
            }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#f59e0b" fillOpacity={1} fill="url(#temperatureGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>}
      {showDetailed && <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Humidity (24h)
          </h3>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={humidityData} margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5
          }}>
                <XAxis dataKey="time" tick={{
              fontSize: 10
            }} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{
              r: 3
            }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>}
      {/* Farm-specific recommendations */}
      {showDetailed && <div className="mt-5 bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Farm Recommendations
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Water crops in the evening to minimize evaporation
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Ensure adequate ventilation in pig pens during midday heat
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Consider harvesting mature crops before Thursday's rain
            </li>
          </ul>
        </div>}
    </div>;
};
export default WeatherIntelligence;