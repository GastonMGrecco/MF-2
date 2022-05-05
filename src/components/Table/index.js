import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import * as Constants from '../../constants';

const Table = ({ dataTable, dataIcon }) => {
  return <Line data={dataTable} />;
};

Table.defaultProps = {
  dataTable: Constants.dataTableExample,
  dataIcon: Constants.defaultAssetIcon
};

Table.propTypes = {
  dataTable: PropTypes.object.isRequired,
  dataIcon: PropTypes.string.isRequired
};

export default Table;
