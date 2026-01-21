import WeatherIcon from './WeatherIcon';
import './ForecastDay.css';

const ForecastDay = ({ day, temp, condition, precipProb }) => {
  return (
    <div className="forecast-day">
      <div className="forecast-day__name">{day}</div>
      <WeatherIcon condition={condition} size="small" />
      <div className="forecast-day__temp">{temp}°C</div>
      <div className="forecast-day__precip">
        💧 {precipProb}%
      </div>
    </div>
  );
};

export default ForecastDay;
