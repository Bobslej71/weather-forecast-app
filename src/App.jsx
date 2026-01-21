import { useReducer, useCallback, useMemo, useEffect } from 'react';
import CityList from './components/CityList';
import CityDetails from './components/CityDetails';
import { citiesWeatherData } from './data/weatherData';
import './App.css';

// Reducer do zarządzania nawigacją
const navigationReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      return {
        ...state,
        view: 'details',
        selectedCityId: action.payload
      };
    case 'GO_BACK':
      return {
        ...state,
        view: 'list',
        selectedCityId: null
      };
    default:
      return state;
  }
};

const initialState = {
  view: 'list',
  selectedCityId: null
};

function App() {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  // useEffect - symulacja ładowania danych
  useEffect(() => {
    console.log('Aplikacja pogodowa załadowana');
    document.title = 'Prognoza Pogody';
  }, []);

  // useEffect - aktualizacja tytułu przy zmianie widoku
  useEffect(() => {
    if (state.view === 'details' && state.selectedCityId) {
      const city = citiesWeatherData.find(c => c.id === state.selectedCityId);
      if (city) {
        document.title = `Pogoda - ${city.name}`;
      }
    } else {
      document.title = 'Prognoza Pogody';
    }
  }, [state.view, state.selectedCityId]);

  // useCallback - obsługa wyboru miasta
  const handleSelectCity = useCallback((cityId) => {
    dispatch({ type: 'SELECT_CITY', payload: cityId });
  }, []);

  // useCallback - obsługa powrotu do listy
  const handleBack = useCallback(() => {
    dispatch({ type: 'GO_BACK' });
  }, []);

  // useMemo - znalezienie wybranego miasta
  const selectedCity = useMemo(() => {
    if (!state.selectedCityId) return null;
    return citiesWeatherData.find(city => city.id === state.selectedCityId);
  }, [state.selectedCityId]);

  return (
    <div className="app">
      {state.view === 'list' ? (
        <CityList
          cities={citiesWeatherData}
          onSelectCity={handleSelectCity}
        />
      ) : (
        selectedCity && (
          <CityDetails
            city={selectedCity}
            onBack={handleBack}
          />
        )
      )}
    </div>
  );
}

export default App;
