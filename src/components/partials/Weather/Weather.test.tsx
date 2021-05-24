import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import Weather from './Weather';

const currentWeather = {
  id: Math.floor(Math.random() * 10),
  day: 'Sun',
  weatherType: 'Sunny',
  temperatures: { high: '78°', low: '67°' },
};

test('renders Weather componet', async () => {
  render(<Provider store={getNewStore()}><Weather weather={currentWeather} /></Provider>);
  screen.getByText('Sun');
});
