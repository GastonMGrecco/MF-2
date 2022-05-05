import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../../constants';
import './index.css';

const MarketStats = ({ dataInfo }) => {
  return (
    <div className='Market'>
      <h1>Market Stats:  {dataInfo[0]?.name}</h1>
      <div className='act0'>
        <h3>CAPITALIZACION BURSATIL</h3>
        <p>15 5T MXN</p>
        <span>33% del mercado de criptomonedas</span>
      </div>
      <div className='act0'>
        <h3>VOLUMEN (24H)</h3>
        <p>{Math.round((dataInfo[0]?.price_usd + Number.EPSILON) * 100) / 100} USD {Math.round((dataInfo[0]?.volume_1day_usd + Number.EPSILON) * 100) / 100} BTC</p>
        <span>+4.84%</span>
      </div>
      <div className='act0'>
        <h3>SUMINISTRO EN CIRCULACION</h3>
        <p>19.0M BTC</p>
        <span>91% de suministro total</span>
      </div>
      <div className='act0'>
        <h3>TIEMPO HABITUAL DE RETENCION</h3>
        <p>115 DIAS</p>
      </div>
      <div className='act1'>
        <h3>ACTIVIDAD COMERCIAL</h3>
        <div id='act1'>
          <p>COMPRA DEL 71%</p>
          <span>VENTA DEL 29%</span>
        </div>
      </div>
      <div className='act2'>
        <h3>POPULARIDAD</h3>
        <p>#{dataInfo[0]?.type_is_crypto}</p>
      </div>
      <div className='act3'>
        <h3>MAXIMO HISTORICO</h3>
        <p>1.4M USD</p>
      </div>
      <div className='act3'>
        <h3>CAMBIO DE PRECIO (1h)</h3>
        <p>-0.63%</p>
      </div>
      <div className='act3'>
        <h3>CAMBIO DE PRECIO (24H)</h3>
        <p>+1.88%</p>
      </div>
      <div className='act3'>
        <h3>CAMBIO DE PRECIO (7 DIAS)</h3>
        <p>-2.35%</p>
      </div>
    </div>
  );
};
MarketStats.defaultProps = {
  dataInfo: Constants.dataInfoExample
};

MarketStats.propTypes = {
  dataInfo: PropTypes.array.isRequired
};
export default MarketStats;
