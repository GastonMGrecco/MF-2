import axios from 'axios';
import moment from 'moment';
import * as Constants from '../constants';

const options = {
  headers: {
    'X-CoinAPI-Key': Constants.API
  }
};

export const getAssetInformation = async (asset = Constants.DEFAULT_ASSET) => {
  const url = `${Constants.URL}assets/${asset}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const getAssetsIcon = async (asset = Constants.DEFAULT_ASSET) => {
  const url = `${Constants.URL}assets/icons/${asset}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const getAssetHistoryValues = async (asset = Constants.DEFAULT_ASSET, periodId = Constants.timeInterval.WEEK, periodStart, periodEnd) => {
  if (!periodStart) periodStart = moment().startOf('year').subtract(1, 'year').toISOString();
  if (!periodEnd) periodEnd = moment().startOf('month').toISOString();

  const url = `${Constants.URL}ohlcv/BINANCE_SPOT_${asset}_USDC/history?period_id=${periodId}&time_start=${periodStart}&time_end=${periodEnd}`;
  const response = await axios.get(url, options);

  const priceHistory = response.data.map(asset => asset.price_close);
  const dateHistory = response.data.map(asset => moment(asset.time_close).format('MMM-YY'));

  return { dateHistory, priceHistory };
};
