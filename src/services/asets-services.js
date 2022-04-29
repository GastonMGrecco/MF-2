import axios from 'axios';
const config = {
  headers: {
    'X-CoinAPI-Key': 'D7A0D5C9-07DE-4F87-AE66-B097197F526B'
  }
};
const url = 'https://rest.coinapi.io/v1/ohlcv/BINANCE_SPOT_BTC_USDC/history?period_id=1MTH&time_start=2011-10-05T14:48:00.000Z&time_end=2022-04-29T16:20:40.074Z';

const getAsetsCompare = () => {
  return axios.get(url, config).then((res) => res.data);
};

export { getAsetsCompare };
