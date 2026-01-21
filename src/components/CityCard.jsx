import { useCallback } from 'react';
import WeatherIcon from './WeatherIcon';
import './CityCard.css';

const CityCard = ({ city, onSelect }) => {
  const handleClick = useCallback(() => {
    onSelect(city.id);
  }, [city.id, onSelect]);

  return (
    <div className="city-card" onClick={handleClick}>
      <div className="city-card__header">
        <h3 className="city-card__name">{city.name}</h3>
        <WeatherIcon condition={city.condition} size="medium" />
      </div>
      <div className="city-card__temp">
        {city.currentTemp}°C
      </div>
      <div className="city-card__condition">
        {city.conditionText}
      </div>
    </div>
  );
};

export default CityCard;
