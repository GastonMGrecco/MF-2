import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { getAssetHistoryValues, getAssetInformation, getAssetsIcon } from '../../services/assets.services';
import * as Constants from '../../constants';

const Table = ({ asset }) => {
  const [assetData, setAssetData] = useState([{}]);
  const [assetIcon, setAssetIcon] = useState(null);
  const [dataTable, setDataTable] = useState({ labels: [], datasets: [{ label: asset, data: [] }] });

  useEffect(() => {
    getAssetInformation(asset).then((resp) => setAssetData(resp));
    getAssetHistoryValues(asset, Constants.timeInterval.WEEK)
      .then((resp) => setDataTable(prevState => ({ ...prevState, labels: resp.dateHistory, datasets: [{ label: asset, data: resp.priceHistory }] })));
    getAssetsIcon().then((resp) => setAssetIcon(resp.filter(icon => icon.asset_id === asset)));
  }, []);

  return (
    <div>
        <Line data={dataTable} />
    </div>
  );
};

Table.defaultProps = {
  asset: Constants.DEFAULT_ASSET
};

Table.propTypes = {
  asset: PropTypes.string.isRequired
};

export default Table;
