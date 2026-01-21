// Dane pogodowe dla 5 miejscowości (dane na sztywno)
export const citiesWeatherData = [
  {
    id: 1,
    name: "Warszawa",
    currentTemp: 12,
    condition: "sunny",
    conditionText: "Słonecznie",
    humidity: 65,
    cloudCover: 10,
    wind: {
      speed: 15,
      direction: "NW",
      directionDeg: 315
    },
    precipitation: {
      probability: 5,
      type: null,
      amount: 0
    },
    forecast: [
      { day: "Pon", temp: 14, condition: "sunny", precipProb: 0 },
      { day: "Wt", temp: 16, condition: "partly-cloudy", precipProb: 10 },
      { day: "Śr", temp: 13, condition: "cloudy", precipProb: 30 },
      { day: "Czw", temp: 11, condition: "rainy", precipProb: 70 },
      { day: "Pt", temp: 12, condition: "partly-cloudy", precipProb: 20 }
    ]
  },
  {
    id: 2,
    name: "Kraków",
    currentTemp: 8,
    condition: "cloudy",
    conditionText: "Pochmurno",
    humidity: 78,
    cloudCover: 85,
    wind: {
      speed: 8,
      direction: "E",
      directionDeg: 90
    },
    precipitation: {
      probability: 40,
      type: "deszcz",
      amount: 2.5
    },
    forecast: [
      { day: "Pon", temp: 9, condition: "cloudy", precipProb: 45 },
      { day: "Wt", temp: 7, condition: "rainy", precipProb: 80 },
      { day: "Śr", temp: 6, condition: "rainy", precipProb: 90 },
      { day: "Czw", temp: 8, condition: "cloudy", precipProb: 35 },
      { day: "Pt", temp: 10, condition: "partly-cloudy", precipProb: 15 }
    ]
  },
  {
    id: 3,
    name: "Gdańsk",
    currentTemp: 5,
    condition: "rainy",
    conditionText: "Deszczowo",
    humidity: 92,
    cloudCover: 100,
    wind: {
      speed: 25,
      direction: "N",
      directionDeg: 0
    },
    precipitation: {
      probability: 85,
      type: "deszcz",
      amount: 8.2
    },
    forecast: [
      { day: "Pon", temp: 4, condition: "rainy", precipProb: 90 },
      { day: "Wt", temp: 3, condition: "snowy", precipProb: 75 },
      { day: "Śr", temp: 2, condition: "snowy", precipProb: 60 },
      { day: "Czw", temp: 5, condition: "cloudy", precipProb: 40 },
      { day: "Pt", temp: 7, condition: "partly-cloudy", precipProb: 25 }
    ]
  },
  {
    id: 4,
    name: "Wrocław",
    currentTemp: 15,
    condition: "partly-cloudy",
    conditionText: "Częściowe zachmurzenie",
    humidity: 55,
    cloudCover: 45,
    wind: {
      speed: 12,
      direction: "SW",
      directionDeg: 225
    },
    precipitation: {
      probability: 20,
      type: null,
      amount: 0
    },
    forecast: [
      { day: "Pon", temp: 16, condition: "sunny", precipProb: 5 },
      { day: "Wt", temp: 18, condition: "sunny", precipProb: 0 },
      { day: "Śr", temp: 17, condition: "partly-cloudy", precipProb: 15 },
      { day: "Czw", temp: 14, condition: "cloudy", precipProb: 40 },
      { day: "Pt", temp: 13, condition: "rainy", precipProb: 65 }
    ]
  },
  {
    id: 5,
    name: "Zakopane",
    currentTemp: -2,
    condition: "snowy",
    conditionText: "Opady śniegu",
    humidity: 88,
    cloudCover: 95,
    wind: {
      speed: 5,
      direction: "S",
      directionDeg: 180
    },
    precipitation: {
      probability: 90,
      type: "śnieg",
      amount: 12.5
    },
    forecast: [
      { day: "Pon", temp: -3, condition: "snowy", precipProb: 95 },
      { day: "Wt", temp: -5, condition: "snowy", precipProb: 85 },
      { day: "Śr", temp: -4, condition: "cloudy", precipProb: 50 },
      { day: "Czw", temp: -1, condition: "partly-cloudy", precipProb: 30 },
      { day: "Pt", temp: 1, condition: "sunny", precipProb: 10 }
    ]
  }
];

// Mapowanie warunków pogodowych na emoji/ikony
export const conditionIcons = {
  "sunny": "☀️",
  "partly-cloudy": "⛅",
  "cloudy": "☁️",
  "rainy": "🌧️",
  "snowy": "❄️",
  "stormy": "⛈️"
};

export const conditionNames = {
  "sunny": "Słonecznie",
  "partly-cloudy": "Częściowe zachmurzenie",
  "cloudy": "Pochmurno",
  "rainy": "Deszczowo",
  "snowy": "Śnieżnie",
  "stormy": "Burza"
};
