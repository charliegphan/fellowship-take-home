import React from 'react';
import PropTypes from 'prop-types';
import IssuedAsset from './IssuedAssets.jsx';
import TotalCost from './TotalCost.jsx';

const Company = ({ investment }) => (
  <table>
    <tbody>
      <tr>
        <th>{investment.name}</th>
        <th />
        <th />
        <th>{investment.quantity}</th>
        <th>{investment.cost.$}</th>
      </tr>
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