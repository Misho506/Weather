import React, { ReactElement } from 'react';
import useSelector from '../../../hooks/useSelector';
import WeatherList from '../../partials/WeatherList/WeatherList';
import Table from '../Table/Table';

import './Home.scss';

const Home = (): ReactElement => {
  const { dailyForecast } = useSelector((s) => s.weather);

  return (
    <div className="home-container">
      <WeatherList />
      { dailyForecast
        && (
          <Table />
        )}
    </div>
  );
};

export default Home;
