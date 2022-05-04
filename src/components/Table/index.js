 import React/*, { useEffect, useState } */from 'react';
//import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
// import {
//   getAssetHistoryValues,
//   getAssetInformation,
//   getAssetsIcon,
// } from '../../services/assets.services';
// import * as Constants from '../../constants';

const Table = (/*{ asset }*/) => {
  // const [assetData, setAssetData] = useState([{}]);
  // const [assetIcon, setAssetIcon] = useState(null);
  // const [dataTable, setDataTable] = useState({ labels: [], datasets: [{ label: asset, data: [] }] });

  // useEffect(() => {
  // getAssetInformation(asset).then((resp) => setAssetData(resp));
  // getAssetHistoryValues(asset, Constants.timeInterval.WEEK)
  //   .then((resp) => setDataTable(prevState => ({ ...prevState, labels: resp.dateHistory, datasets: [{ label: asset, data: resp.priceHistory }] })));
  // getAssetsIcon().then((resp) => setAssetIcon(resp.filter(icon => icon.asset_id === asset)));
  // }, []);
  const dataTable = {
    labels: [
      'Jan-21',
      'Jan-21',
      'Jan-21',
      'Jan-21',
      'Jan-21',
      'Feb-21',
      'Feb-21',
      'Feb-21',
      'Feb-21',
      'Mar-21',
      'Mar-21',
      'Mar-21',
      'Mar-21',
      'Apr-21',
      'Apr-21',
      'Apr-21',
      'Apr-21',
      'May-21',
      'May-21',
      'May-21',
      'May-21',
      'May-21',
      'Jun-21',
      'Jun-21',
      'Jun-21',
      'Jun-21',
      'Jul-21',
      'Jul-21',
      'Jul-21',
      'Jul-21',
      'Aug-21',
      'Aug-21',
      'Aug-21',
      'Aug-21',
      'Aug-21',
      'Sep-21',
      'Sep-21',
      'Sep-21',
      'Sep-21',
      'Oct-21',
      'Oct-21',
      'Oct-21',
      'Oct-21',
      'Oct-21',
      'Nov-21',
      'Nov-21',
      'Nov-21',
      'Nov-21',
      'Dec-21',
      'Dec-21',
      'Dec-21',
      'Dec-21',
      'Jan-22',
      'Jan-22',
      'Jan-22',
      'Jan-22',
      'Jan-22',
      'Feb-22',
      'Feb-22',
      'Feb-22',
      'Feb-22',
      'Mar-22',
      'Mar-22',
      'Mar-22',
      'Mar-22',
      'Apr-22',
      'Apr-22',
      'Apr-22',
      'Apr-22',
      'May-22',
    ],
    datasets: [
      {
        label: 'BTC',
        data: [
          33033.26, 38156.4, 35818.76, 32302.42, 33130.26, 38866.41, 48629.31,
          57484.39, 45215.21, 50979.57, 59011.65, 57367.35, 55767.6, 58221.71,
          59954.82, 56265.18, 49726.04, 56606.3, 58280.4, 46429.2, 34734.64,
          35658.55, 35798.29, 39025.72, 35593.89, 34678.88, 35290.65, 34244.09,
          31782.76, 35401.94, 39856.79, 43835.04, 47003.87, 49276.5, 48792.95,
          51786.64, 46051.09, 47254.55, 43207.18, 48220, 54683.46, 61535.05,
          60861.3, 61333.39, 63316.59, 65524.48, 58652.71, 57310.86, 49462.25,
          50102.38, 46706.64, 50804.87, 47289.86, 41855.37, 43084.73, 36261.38,
          37917.38, 42407.71, 42066.08, 38369.12, 37706.37, 38409.21, 37767.96,
          41281.03, 46855.47, 46410.85, 42159.56, 39683.78, 39466.74, 38469.56,
        ],
      },
    ],
  };
  return <Line data={dataTable} />;
};

// Table.defaultProps = {
//   asset: Constants.DEFAULT_ASSET,
// };

// Table.propTypes = {
//   asset: PropTypes.string.isRequired,
// };

export default Table;
