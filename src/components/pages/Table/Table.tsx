import React, { ReactElement, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { fetchHourlyForecast } from 'store/slices/weatherSlice';
import useSelector from '../../../hooks/useSelector';

import './Table.scss';

const TableComp = (): ReactElement => {
  const dispatch = useDispatch();
  const { dailyForecast } = useSelector((s) => s.weather);

  useEffect(() => {
    if (!dailyForecast) dispatch(fetchHourlyForecast());
  }, [dailyForecast]);

  return (
    <div className="Table-container">
      { dailyForecast
        && (
        <Table striped hover>
          <thead>
            <tr>
              <th>{' '}</th>
              <th>MORNING</th>
              <th>EVENING</th>
              <th>NIGHT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Temperatures</td>
              <td>
                {dailyForecast.morning}
                °
              </td>
              <td>
                {dailyForecast.evening}
                °
              </td>
              <td>
                {dailyForecast.night}
                °
              </td>
            </tr>
          </tbody>
        </Table>
        )}
    </div>
  );
};

export default TableComp;
