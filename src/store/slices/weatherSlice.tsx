/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { WeatherInterface } from '../../constants/weatherlist';

type DailyForecast = { day: string, evening: number, morning: number, night: number };
interface WeatherStateInterface {
  weatherList: WeatherInterface[];
  dailyForecast?: DailyForecast;
  loading: boolean;
}

const initialState: WeatherStateInterface = {
  weatherList: [],
  dailyForecast: undefined,
  loading: false,
};

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setDailyForecast(state, action: PayloadAction<DailyForecast>) {
      state.dailyForecast = action.payload;
    },
    setWeatherList(state, action: PayloadAction<WeatherInterface[]>) {
      state.weatherList = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setDailyForecast, setWeatherList, setLoading } = counterSlice.actions;
export default counterSlice.reducer;

// ------ async function --------
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const numberOfResults = 40;
const key = '0695f7b2dd5115ae627d1f9ad8b4cec8';
const randomItems = Math.floor(Math.random() * 35);

export const fetchWeatherList = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=${numberOfResults}&appid=${key}`)
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      const res = data.list.slice(randomItems, randomItems + 5);
      dispatch(setWeatherList(res.map((item: any) => ({
        id: item.weather[0].id,
        day: days[new Date(item.dt_txt).getDay()],
        temperatures: { high: item.main.temp_max, low: item?.main.temp_min },
        weatherType: item.weather[0].main,
      }))));
      dispatch(setLoading(false));
    })
    .catch((e) => console.log(e));
};

export const fetchHourlyForecast = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&cnt=1&exclude=minutely,hourly,alerts,current&appid=${key}`)
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      dispatch(setDailyForecast({
        day: data.daily[0].temp.day,
        evening: data.daily[0].temp.eve,
        morning: data.daily[0].temp.morn,
        night: data.daily[0].temp.night,
      }));
      dispatch(setLoading(false));
    })
    .catch((e) => console.log(e));
};
