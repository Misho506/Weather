import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import WeatherList from './WeatherList';

test('renders WeatherList componet', async () => {
  render(<Provider store={getNewStore()}><WeatherList /></Provider>);
  await waitForElementToBeRemoved(() => screen.getByText('loading...'));
});
