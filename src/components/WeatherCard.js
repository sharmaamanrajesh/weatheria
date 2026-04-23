import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiCloudRain } from 'react-icons/wi';
import './WeatherCard.css';

function WeatherCard({ day }) {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <WiDaySunny className="card-icon sunny" />;
      case 'cloudy':
        return <WiCloudy className="card-icon cloudy" />;
      case 'rainy':
        return <WiRain className="card-icon rainy" />;
      case 'partly cloudy':
        return <WiCloudRain className="card-icon partly-cloudy" />;
      default:
        return <WiDaySunny className="card-icon sunny" />;
    }
  };

  return (
    <div className="weather-card">
      <h4 className="card-day">{day.day}</h4>
      <div className="card-icon-wrapper">
        {getWeatherIcon(day.condition)}
      </div>
      <p className="card-condition">{day.condition}</p>
      <div className="card-temps">
        <span className="card-high">{day.high}°</span>
        <span className="card-low">{day.low}°</span>
      </div>
    </div>
  );
}

export default WeatherCard;
