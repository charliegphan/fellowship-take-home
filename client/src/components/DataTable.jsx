import React from 'react';
import PropTypes from 'prop-types';

import Company from './Company.jsx';
import TotalCost from './TotalCost.jsx';

import styles from '../../../styles/DataTable.css';

const DataTable = ({ investmentData, totalCost }) => (
  <div>
    <table className={styles.header}>
      <tbody>
        <tr>
          <th>Investment</th>
          <th>Asset</th>
          <th>Investment date</th>
          <th>Shares</th>
          <th>Cost</th>
        </tr>
      </tbody>
    </table>

    {investmentData.map(investment => (
      <Company
        investment={investment}
        key={investment.name}
      />
    ))}

    <TotalCost totalCost={totalCost} />
  </div>
);

DataTable.defaultProps = {
  investmentData: [],
};

DataTable.propTypes = {
  investmentData: PropTypes.arrayOf(
    PropTypes.shape({
      investment: PropTypes.shape({
        cost: PropTypes.shape({
          $: PropTypes.number,
        }),
        id: PropTypes.number,
        issued_assets: PropTypes.arrayOf(
          PropTypes.shape({
            asset_class: PropTypes.string,
            cost: PropTypes.shape({
              $: PropTypes.number,
            }),
            id: PropTypes.number,
            investment_date: PropTypes.string,
            quantity: PropTypes.number,
          }),
        ),
        name: PropTypes.string,
        quantity: PropTypes.number,
      }),
    }),
  ),
};
// TODO PROPTYPES

export default DataTable;
