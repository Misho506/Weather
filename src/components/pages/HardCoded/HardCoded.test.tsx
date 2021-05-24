import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import HardCoded from './HardCoded';

test('renders learn react link', async () => {
  render(<Provider store={getNewStore()}><HardCoded /></Provider>);
  screen.getByText('Sun');
});
