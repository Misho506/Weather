import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// slices
import weatherReducer from './slices/weatherSlice';

const rootReducer = combineReducers({ weather: weatherReducer });

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;

type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export { store }; export type { RootState, AppThunk };

// testing needs a fresh store for each test
export function getNewStore(): typeof store {
  return configureStore({
    reducer: rootReducer,
  });
}
