import React from 'react';
import PropTypes from 'prop-types';
import IssuedAsset from './IssuedAssets.jsx';
import CompanyHeader from './CompanyHeader.jsx';

import styles from '../../../styles/Company.css'

const Company = ({ investment, totalCost }) => (
  <div className={styles.container}>
    <table className={styles.company}>
      <tbody>
        <CompanyHeader investment={investment} />
        {investment.issued_assets.map(issuedAsset => <IssuedAsset issuedAsset={issuedAsset} />)}
      </tbody>
    </table>
  </div>
);

Company.propTypes = {
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
};

Company.defaultProps = {
  investment: [],
};

export default Company;
