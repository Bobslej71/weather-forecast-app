import { useMemo } from 'react';
import { conditionIcons } from '../data/weatherData';
import './WeatherIcon.css';

const WeatherIcon = ({ condition, size = 'medium' }) => {
  const icon = useMemo(() => {
    return conditionIcons[condition] || '❓';
  }, [condition]);

  return (
    <span className={`weather-icon weather-icon--${size}`} role="img" aria-label={condition}>
      {icon}
    </span>
  );
};

export default WeatherIcon;
