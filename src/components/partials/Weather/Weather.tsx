import React, { ReactElement } from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { fetchHourlyForecast } from 'store/slices/weatherSlice';
import {
  faCloud, faCloudMoonRain, faCloudRain, faSun,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherInterface } from '../../../constants/weatherlist';
import './Weather.scss';

interface WeatherProps {
  weather: WeatherInterface;
}

const Weather = ({ weather }: WeatherProps): ReactElement => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchHourlyForecast());
  };

  const showIcon = (weatherType: string) => {
    let icon: typeof faCloud | typeof faCloudMoonRain | typeof faCloudRain| typeof faSun;
    if (weatherType === 'Rain') {
      icon = faCloudRain;
    } else if (weatherType === ('Clouds' || 'Mist')) {
      icon = faCloud;
    } else if (weatherType === 'Clear') {
      icon = faSun;
    } else {
      icon = faCloudMoonRain;
    }
    return <FontAwesomeIcon color="black" size="3x" icon={icon} className="my-2" />;
  };

  return (
    <Col className="weather-container mt-3 p-0 mx-2 b-rounded" onClick={handleClick}>
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
  );
};

export default Weather;
