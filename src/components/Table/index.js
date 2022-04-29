import React, { useState, useEffect } from 'react';
import { getAsetsCompare } from '../../services/asets-services';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';

const Table = () => {
  const [dataTable, setDataTable] = useState();
  const getData = async () => {
    const data = await getAsetsCompare();
    setDataTable(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const date = dataTable?.map((aset) => aset?.time_close);
  const asets = dataTable?.map((aset) => aset?.price_close);

  const initAsets = {
    labels: date && date,
    datasets: [
      {
        label: 'BTC USD',
        data: asets && asets
      }
    ]
  };
  return (
    <div>
      <Line data={initAsets}/>
    </div>
  );
};

export default Table;
