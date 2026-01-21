import CityCard from './CityCard';
import './CityList.css';

const CityList = ({ cities, onSelectCity }) => {
  return (
    <div className="city-list">
      <h1 className="city-list__title">Prognoza Pogody</h1>
      <p className="city-list__subtitle">Wybierz miasto, aby zobaczyć szczegóły</p>
      <div className="city-list__grid">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            city={city}
            onSelect={onSelectCity}
          />
        ))}
      </div>
    </div>
  );
};

export default CityList;
