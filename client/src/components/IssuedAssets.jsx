import React from 'react';

const IssuedAssets = ({ issuedAsset }) => (
  <tr>
    <td />
    <td>{issuedAsset.asset_class}</td>
    <td>{issuedAsset.investment_date}</td>
    <td>{issuedAsset.quantity}</td>
    <td>{issuedAsset.cost.$}</td>
  </tr>
);

export default IssuedAssets;
