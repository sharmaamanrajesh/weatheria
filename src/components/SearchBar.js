import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  const suggestedCities = ['San Francisco', 'New York', 'London', 'Tokyo'];

  const handleSuggestedCity = (city) => {
    onSearch(city);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for a city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-input"
          />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="suggested-cities">
        <p className="suggested-label">Quick search:</p>
        <div className="city-buttons">
          {suggestedCities.map((city) => (
            <button
              key={city}
              onClick={() => handleSuggestedCity(city)}
              className="city-button"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
