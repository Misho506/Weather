export interface WeatherInterface {
  id: number;
  day: string;
  weatherType: string;
  temperatures: { high: string, low: string };
}

export const weatherList: WeatherInterface[] = [
  {
    id: Math.floor(Math.random() * 10),
    day: 'Sun',
    weatherType: 'Sunny',
    temperatures: { high: '78', low: '67' },
  },
  {
    id: Math.floor(Math.random() * 10),
    day: 'Mon',
    weatherType: 'Sunny',
    temperatures: { high: '83', low: '66' },
  },
  {
    id: Math.floor(Math.random() * 10),
    day: 'Tue',
    weatherType: 'Cloudy',
    temperatures: { high: '77', low: '65' },
  },
  {
    id: Math.floor(Math.random() * 10),
    day: 'Wed',
    weatherType: 'Sunny',
    temperatures: { high: '78', low: '64' },
  },
  {
    id: Math.floor(Math.random() * 10),
    day: 'Thu',
    weatherType: 'Rainy',
    temperatures: { high: '77', low: '62' },
  },
  {
    id: Math.floor(Math.random() * 10),
    day: 'Fri',
    weatherType: 'Snowy',
    temperatures: { high: '71', low: '61' },
  },
];
