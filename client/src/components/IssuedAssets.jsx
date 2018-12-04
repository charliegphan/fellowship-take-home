import React from 'react';

import toDashedDate from '../../../helpers/toDashedDate.js';

const IssuedAssets = ({ issuedAsset }) => (
  <tr>
    <td />
    <td>{issuedAsset.asset_class}</td>
    <td>{toDashedDate(issuedAsset.investment_date)}</td>
    <td>{issuedAsset.quantity}</td>
    <td>{`${issuedAsset.cost.$}.00 $`}</td>
  </tr>
);

export default IssuedAssets;
