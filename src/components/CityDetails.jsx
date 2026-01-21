import { useMemo, useCallback } from 'react';
import WeatherIcon from './WeatherIcon';
import ForecastDay from './ForecastDay';
import './CityDetails.css';

const CityDetails = ({ city, onBack }) => {
  const handleBack = useCallback(() => {
    onBack();
  }, [onBack]);

  // Obliczanie kierunku wiatru w formie tekstowej
  const windDirectionText = useMemo(() => {
    const directions = {
      'N': 'północny',
      'NE': 'północno-wschodni',
      'E': 'wschodni',
      'SE': 'południowo-wschodni',
      'S': 'południowy',
      'SW': 'południowo-zachodni',
      'W': 'zachodni',
      'NW': 'północno-zachodni'
    };
    return directions[city.wind.direction] || city.wind.direction;
  }, [city.wind.direction]);

  // Formatowanie informacji o opadach
  const precipitationInfo = useMemo(() => {
    if (city.precipitation.probability === 0 || !city.precipitation.type) {
      return 'Brak opadów';
    }
    return `${city.precipitation.type} - ${city.precipitation.amount} mm/m²`;
  }, [city.precipitation]);

  return (
    <div className="city-details">
      <button className="city-details__back" onClick={handleBack}>
        ← Powrót do listy
      </button>

      <div className="city-details__header">
        <h1 className="city-details__name">{city.name}</h1>
        <div className="city-details__current">
          <WeatherIcon condition={city.condition} size="large" />
          <span className="city-details__temp">{city.currentTemp}°C</span>
        </div>
        <p className="city-details__condition-text">{city.conditionText}</p>
      </div>

      <div className="city-details__info">
        <div className="city-details__info-item">
          <span className="info-label">☁️ Zachmurzenie:</span>
          <span className="info-value">{city.cloudCover}%</span>
        </div>
        <div className="city-details__info-item">
          <span className="info-label">💨 Wiatr:</span>
          <span className="info-value">{city.wind.speed} km/h, {windDirectionText}</span>
        </div>
        <div className="city-details__info-item">
          <span className="info-label">💧 Wilgotność:</span>
          <span className="info-value">{city.humidity}%</span>
        </div>
        <div className="city-details__info-item">
          <span className="info-label">🌧️ Opady:</span>
          <span className="info-value">{city.precipitation.probability}% szans</span>
        </div>
        {city.precipitation.type && (
          <div className="city-details__info-item">
            <span className="info-label">📏 Ilość opadów:</span>
            <span className="info-value">{precipitationInfo}</span>
          </div>
        )}
      </div>

      <div className="city-details__forecast">
        <h2>Prognoza na 5 dni</h2>
        <div className="city-details__forecast-list">
          {city.forecast.map((day, index) => (
            <ForecastDay
              key={index}
              day={day.day}
              temp={day.temp}
              condition={day.condition}
              precipProb={day.precipProb}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
