import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import Table from './Table';

test('renders Table componet', async () => {
  render(<Provider store={getNewStore()}><Table /></Provider>);
});
