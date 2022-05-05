import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import MarketStats from './components/MarketStats';
import {
  getAssetHistoryValues,
  getAssetInformation,
  getAssetsIcon
} from './services/assets.services';
import * as Constants from './constants';
import PropTypes from 'prop-types';

const App = ({ asset }) => {
  const [assetData, setAssetData] = useState([{}]);
  const [assetIcon, setAssetIcon] = useState(null);
  const [dataTable, setDataTable] = useState({
    labels: [],
    datasets: [{ label: asset, data: [] }]
  });

  useEffect(() => {
    getAssetInformation(asset).then((resp) => setAssetData(resp));
    getAssetHistoryValues(asset, Constants.timeInterval.WEEK).then((resp) =>
      setDataTable((prevState) => ({
        ...prevState,
        labels: resp.dateHistory,
        datasets: [{ label: asset, data: resp.priceHistory }]
      }))
    );
    getAssetsIcon().then((resp) =>
      setAssetIcon(resp.filter((icon) => icon.asset_id === asset))
    );
  }, []);
  return (
    <div style={{ width: '50%', height: '50%' }}>
      <h2>Lista de Assets</h2>
      <Table dataTable={dataTable} dataIcon={assetIcon} />
      <MarketStats dataInfo={assetData} />
    </div>
  );
};
App.defaultProps = {
  asset: Constants.DEFAULT_ASSET
};

App.propTypes = {
  asset: PropTypes.string.isRequired
};

export default App;
