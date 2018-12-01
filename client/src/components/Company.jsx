import React from 'react';
import PropTypes from 'prop-types';
import IssuedAsset from './IssuedAssets.jsx';
import Header from './Header.jsx';

import styles from '../../../styles/Company.css'

const Company = ({ investment, totalCost }) => (
  <div className={styles.container}>
    <table className={styles.company}>
      <tbody>
        <Header investment={investment} />
        {investment.issued_assets.map(issuedAsset => <IssuedAsset issuedAsset={issuedAsset} />)}
      </tbody>
    </table>
  </div>
);

Company.defaultProps = {
  investment: [],
};

// Company.PropTypes = {
//   investment: 
// };

export default Company;
