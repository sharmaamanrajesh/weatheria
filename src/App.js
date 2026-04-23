import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { WiCloud, WiDaySunny, WiRain, WiWind } from 'react-icons/wi';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('San Francisco');

  const mockWeatherData = {
    'San Francisco': {
      temp: 72,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      feelsLike: 70,
      icon: '02d',
      forecast: [
        { day: 'Mon', high: 75, low: 60, condition: 'Sunny' },
        { day: 'Tue', high: 73, low: 62, condition: 'Cloudy' },
        { day: 'Wed', high: 68, low: 58, condition: 'Rainy' },
        { day: 'Thu', high: 70, low: 59, condition: 'Partly Cloudy' },
        { day: 'Fri', high: 76, low: 61, condition: 'Sunny' },
      ]
    },
    'New York': {
      temp: 68,
      condition: 'Clear Sky',
      humidity: 55,
      windSpeed: 8,
      feelsLike: 67,
      icon: '01d',
      forecast: [
        { day: 'Mon', high: 70, low: 55, condition: 'Clear' },
        { day: 'Tue', high: 72, low: 57, condition: 'Sunny' },
        { day: 'Wed', high: 65, low: 52, condition: 'Cloudy' },
        { day: 'Thu', high: 68, low: 54, condition: 'Clear' },
        { day: 'Fri', high: 73, low: 58, condition: 'Sunny' },
      ]
    },
    'London': {
      temp: 55,
      condition: 'Rainy',
      humidity: 80,
      windSpeed: 15,
      feelsLike: 52,
      icon: '10d',
      forecast: [
        { day: 'Mon', high: 57, low: 48, condition: 'Rainy' },
        { day: 'Tue', high: 56, low: 47, condition: 'Cloudy' },
        { day: 'Wed', high: 58, low: 49, condition: 'Partly Cloudy' },
        { day: 'Thu', high: 60, low: 50, condition: 'Clear' },
        { day: 'Fri', high: 62, low: 52, condition: 'Sunny' },
      ]
    },
    'Tokyo': {
      temp: 65,
      condition: 'Mostly Sunny',
      humidity: 70,
      windSpeed: 10,
      feelsLike: 64,
      icon: '02d',
      forecast: [
        { day: 'Mon', high: 68, low: 58, condition: 'Sunny' },
        { day: 'Tue', high: 70, low: 60, condition: 'Sunny' },
        { day: 'Wed', high: 66, low: 56, condition: 'Cloudy' },
        { day: 'Thu', high: 67, low: 57, condition: 'Partly Cloudy' },
        { day: 'Fri', high: 72, low: 62, condition: 'Sunny' },
      ]
    },
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = (cityName) => {
    setLoading(true);
    setError(null);
    
    setTimeout(() => {
      const data = mockWeatherData[cityName];
      if (data) {
        setWeather(data);
        setCity(cityName);
      } else {
        setError('City not found in demo data');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="background-gradient"></div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">
            <WiDaySunny className="title-icon" />
            Weatheria
          </h1>
          <p className="subtitle">Your Personal Weather Dashboard</p>
        </header>

        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <p>Try: San Francisco, New York, London, or Tokyo</p>
          </div>
        )}

        {weather && !loading && (
          <>
            <div className="current-weather">
              <div className="weather-main">
                <h2 className="city-name">{city}</h2>
                <div className="temp-display">
                  <span className="temperature">{weather.temp}°</span>
                  <span className="unit">F</span>
                </div>
                <p className="condition">{weather.condition}</p>
                <p className="feels-like">Feels like {weather.feelsLike}°F</p>
              </div>

              <div className="weather-details">
                <div className="detail-card">
                  <WiWind className="detail-icon" />
                  <div className="detail-info">
                    <p className="detail-label">Wind Speed</p>
                    <p className="detail-value">{weather.windSpeed} mph</p>
                  </div>
                </div>
                <div className="detail-card">
                  <WiCloud className="detail-icon" />
                  <div className="detail-info">
                    <p className="detail-label">Humidity</p>
                    <p className="detail-value">{weather.humidity}%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast-section">
              <h3 className="forecast-title">5-Day Forecast</h3>
              <div className="forecast-grid">
                {weather.forecast.map((day, index) => (
                  <WeatherCard key={index} day={day} />
                ))}
              </div>
            </div>
          </>
        )}

        <footer className="footer">
          <p>© 2026 Weatheria. Built for testing CI/CD pipelines 🚀</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
