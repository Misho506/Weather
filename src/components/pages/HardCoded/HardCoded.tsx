/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { fetchHourlyForecast } from 'store/slices/weatherSlice';
import {
  faCloud, faCloudMoonRain, faCloudRain, faSun, faSnowflake,
} from '@fortawesome/free-solid-svg-icons';
import { weatherList } from '../../../constants/weatherlist';

const HardCoded = (): ReactElement => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchHourlyForecast());
  };

  const showIcon = (weatherType: string) => {
    let icon:
    typeof faCloud |
    typeof faCloudMoonRain |
    typeof faCloudRain |
    typeof faSun |
    typeof faSnowflake;

    if (weatherType === 'Rainy') {
      icon = faCloudRain;
    } else if (weatherType === 'Cloudy') {
      icon = faCloud;
    } else if (weatherType === 'Sunny') {
      icon = faSun;
    } else if (weatherType === 'Snowy') {
      icon = faSnowflake;
    } else {
      icon = faCloudMoonRain;
    }
    return <FontAwesomeIcon color="black" size="3x" icon={icon} className="my-2" />;
  };

  return (
    <Container>
      <Row>
        {weatherList.map((weather, index) => (
          <Col className="weather-container mt-3 p-0 mx-2 b-rounded" onClick={handleClick} key={index}>
            <Card>
              <div className="d-flex flex-column align-items-center">
                <span className="fs-4">{weather.day}</span>
                {showIcon(weather.weatherType)}
              </div>
              <div>
                <span className="fw-bold">
                  {weather.temperatures.high}
                  °
                </span>
                {' '}
                <span>
                  {weather.temperatures.low}
                  °
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HardCoded;
