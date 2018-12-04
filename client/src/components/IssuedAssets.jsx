import React from 'react';

import toDashedDate from '../../../helpers/toDashedDate.js';

const IssuedAssets = ({ issuedAsset }) => {
  let quantity;
  if (issuedAsset.quantity) {
    quantity = issuedAsset.quantity.toLocaleString();
  }

  return (
    <tr>
      <td />
      <td>{issuedAsset.asset_class}</td>
      <td>{toDashedDate(issuedAsset.investment_date)}</td>
      <td>{quantity}</td>
      <td>{`${issuedAsset.cost.$.toLocaleString(undefined, { minimumFractionDigits: 2 })} $`}</td>
    </tr>
  );
};


export default IssuedAssets;
