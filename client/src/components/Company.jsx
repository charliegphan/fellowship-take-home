import React from 'react';
import PropTypes from 'prop-types';
import IssuedAsset from './IssuedAssets.jsx';
import Header from './Header.jsx';

const Company = ({ investment, totalCost }) => (
  <table>
    <tbody>
      <Header investment={investment} />
      {investment.issued_assets.map(issuedAsset => <IssuedAsset issuedAsset={issuedAsset} />)}
    </tbody>
  </table>

);

Company.defaultProps = {
  investment: [],
};

// Company.PropTypes = {
//   investment: 
// };

export default Company;
