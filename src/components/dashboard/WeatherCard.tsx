import React from 'react';
import { CloudRainIcon, SunIcon, UmbrellaIcon, ThermometerIcon, DropletIcon, WindIcon, CalendarIcon, AlertTriangleIcon, CloudIcon, CloudSnowIcon, CloudLightningIcon, InfoIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip, LineChart, Line, YAxis } from 'recharts';
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
const getWeatherIcon = (icon, theme) => {
  const iconColor = theme === 'dark' ? {
    sun: 'text-yellow-400',
    cloud: 'text-gray-400',
    rain: 'text-blue-400',
    snow: 'text-blue-200',
    storm: 'text-purple-400'
  } : {
    sun: 'text-yellow-600',
    cloud: 'text-gray-500',
    rain: 'text-blue-600',
    snow: 'text-blue-400',
    storm: 'text-purple-600'
  };
  switch (icon) {
    case 'sun':
      return <SunIcon size={24} className={iconColor.sun} />;
    case 'cloud':
      return <CloudIcon size={24} className={iconColor.cloud} />;
    case 'rain':
      return <CloudRainIcon size={24} className={iconColor.rain} />;
    case 'snow':
      return <CloudSnowIcon size={24} className={iconColor.snow} />;
    case 'storm':
      return <CloudLightningIcon size={24} className={iconColor.storm} />;
    default:
      return <SunIcon size={24} className={iconColor.sun} />;
  }
};
const WeatherAlert = ({
  type,
  message,
  theme
}) => {
  const bgColor = type === 'warning' ? theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-50' : theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-50';
  const borderColor = type === 'warning' ? theme === 'dark' ? 'border-yellow-500/30' : 'border-yellow-200' : theme === 'dark' ? 'border-blue-500/30' : 'border-blue-200';
  const textColor = type === 'warning' ? theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800' : theme === 'dark' ? 'text-blue-300' : 'text-blue-800';
  const iconColor = type === 'warning' ? theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600' : theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  return <div className={`${bgColor} border ${borderColor} rounded-lg p-3 flex items-start transition-colors`}>
      <AlertTriangleIcon size={18} className={`${iconColor} mr-2 mt-0.5 flex-shrink-0`} />
      <div>
        <h4 className={`font-medium ${textColor}`}>
          {type === 'warning' ? 'Weather Warning' : 'Weather Advisory'}
        </h4>
        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {message}
        </p>
      </div>
    </div>;
};
const WeatherCard = ({
  detailed = false,
  theme = 'dark'
}) => {
  return <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'} mr-2`}>
              <CloudRainIcon size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Weather Intelligence
            </h2>
          </div>
          {!detailed && <span className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} font-medium cursor-pointer hover:underline`}>
              View Details
            </span>}
        </div>
        {/* Weather Alerts */}
        <div className="space-y-3 mb-5">
          <WeatherAlert type="warning" message="High temperatures expected tomorrow. Ensure adequate water supply for livestock." theme={theme} />
          {detailed && <WeatherAlert type="info" message="Favorable conditions for crop growth in the next 3 days." theme={theme} />}
        </div>
        {/* Current Conditions */}
        <div className={`${theme === 'dark' ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'} rounded-lg p-4 mb-5 transition-colors`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
              Current Conditions
            </h3>
            <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              <CalendarIcon size={14} className="mr-1" />
              <span>Today</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className={`${theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-100 border-blue-200'} rounded-lg p-3 mr-4 border transition-colors`}>
              <SunIcon size={32} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                28°C
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Sunny, feels like 30°C
              </div>
            </div>
            <div className="ml-auto grid grid-cols-2 gap-3 mt-2 sm:mt-0">
              <div className="flex items-center">
                <DropletIcon size={16} className={theme === 'dark' ? 'text-blue-400 mr-1' : 'text-blue-600 mr-1'} />
                <div className="text-sm">
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    65%
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Humidity
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <WindIcon size={16} className={theme === 'dark' ? 'text-blue-400 mr-1' : 'text-blue-600 mr-1'} />
                <div className="text-sm">
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    12 km/h
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Wind
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-3 pt-3 border-t ${theme === 'dark' ? 'border-blue-800/30' : 'border-blue-200/50'} grid grid-cols-3 gap-2 text-center transition-colors`}>
            <div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Sunrise
              </div>
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                06:12 AM
              </div>
            </div>
            <div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Sunset
              </div>
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                06:48 PM
              </div>
            </div>
            <div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Precipitation
              </div>
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                0% chance
              </div>
            </div>
          </div>
        </div>
        {/* Weekly Forecast */}
        <div className="mb-5">
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-3 transition-colors`}>
            7-Day Forecast
          </h3>
          <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-1">
            {weeklyForecast.map((day, index) => <div key={index} className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800/50' : 'bg-gray-100 border-gray-200'} rounded-lg p-2 text-center border transition-colors`}>
                <div className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {day.day}
                </div>
                <div className="my-1 flex justify-center">
                  {getWeatherIcon(day.icon, theme)}
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {day.temp}°C
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  {day.rain}%
                </div>
              </div>)}
          </div>
        </div>
        {/* Temperature Chart */}
        <div>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-3 flex items-center justify-between transition-colors`}>
            <span>Temperature (24h)</span>
            <div className="flex items-center">
              <TrendingUpIcon size={14} className={`mr-1 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} />
              <span className={`text-xs ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
                +2°C from yesterday
              </span>
            </div>
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
                    <stop offset="5%" stopColor={theme === 'dark' ? '#f59e0b' : '#d97706'} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={theme === 'dark' ? '#f59e0b' : '#d97706'} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{
                fontSize: 10,
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} />
                <YAxis tick={{
                fontSize: 10,
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} width={25} domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                color: theme === 'dark' ? '#fff' : '#111827'
              }} formatter={value => [`${value}°C`, 'Temperature']} />
                <Area type="monotone" dataKey="value" stroke={theme === 'dark' ? '#f59e0b' : '#d97706'} fillOpacity={1} fill="url(#temperatureGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Humidity Chart - Only shown in detailed view */}
        {detailed && <>
            <div>
              <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-3 flex items-center justify-between transition-colors`}>
                <span>Humidity (24h)</span>
                <div className="flex items-center">
                  <TrendingDownIcon size={14} className={`mr-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    -5% from yesterday
                  </span>
                </div>
              </h3>
              <div className="h-32 mb-5">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={humidityData} margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5
              }}>
                    <XAxis dataKey="time" tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                    <YAxis tick={{
                  fontSize: 10,
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} width={25} domain={[40, 100]} />
                    <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)',
                  color: theme === 'dark' ? '#fff' : '#111827'
                }} formatter={value => [`${value}%`, 'Humidity']} />
                    <Line type="monotone" dataKey="value" stroke={theme === 'dark' ? '#3b82f6' : '#2563eb'} strokeWidth={2} dot={{
                  fill: theme === 'dark' ? '#3b82f6' : '#2563eb',
                  r: 3
                }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Farm-specific recommendations */}
            <div className={`mt-5 ${theme === 'dark' ? 'bg-green-900/20 border border-green-700/30' : 'bg-green-50 border border-green-200'} rounded-lg p-4 transition-colors`}>
              <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-green-300' : 'text-green-800'} mb-3`}>
                Farm Recommendations
              </h3>
              <ul className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                <li className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                    <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    Water crops in the evening to minimize evaporation
                    <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Best time: After 6:00 PM
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                    <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    Ensure adequate ventilation in pig pens during midday heat
                    <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Critical hours: 12:00 PM - 3:00 PM
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'} rounded-full p-1 mr-2 mt-0.5`}>
                    <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    Consider harvesting mature crops before Thursday's rain
                    <div className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Expected rainfall: 60% chance, 15-20mm
                    </div>
                  </div>
                </li>
              </ul>
              <div className={`mt-3 pt-3 border-t ${theme === 'dark' ? 'border-green-800/30' : 'border-green-200'} flex items-start`}>
                <InfoIcon size={16} className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mr-2 mt-0.5 flex-shrink-0`} />
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  These recommendations are based on AI analysis of current
                  weather conditions, forecast data, and optimal farming
                  practices for your specific crops and livestock.
                </div>
              </div>
            </div>
          </>}
      </div>
    </div>;
};
export default WeatherCard;