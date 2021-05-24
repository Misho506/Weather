/* eslint-disable react/no-array-index-key */
import React, { ReactElement, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchWeatherList } from 'store/slices/weatherSlice';
import useSelector from '../../../hooks/useSelector';
import Weather from '../Weather/Weather';

const WeatherList = (): ReactElement => {
  const dispatch = useDispatch();
  const { weatherList, loading } = useSelector((s) => s.weather);

  useEffect(() => {
    if (weatherList.length === 0) dispatch(fetchWeatherList());
  }, [weatherList]);

  return (
    <Container>
      { !loading
        ? (
          <Row>
            {weatherList.map((weather, index) => <Weather key={index} weather={weather} />)}
          </Row>
        ) : (<span>loading...</span>)}
    </Container>
  );
};

export default WeatherList;
