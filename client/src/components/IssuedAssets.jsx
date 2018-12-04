import React from 'react';
import PropTypes from 'prop-types';

import toDashedDate from '../../../helpers/toDashedDate.js';

import styles from '../../../styles/IssuedAssets.css';

const IssuedAssets = ({ issuedAsset }) => {
  let quantity;
  if (issuedAsset.quantity) {
    quantity = issuedAsset.quantity.toLocaleString();
  }
  return (
    <tr className={styles.row}>
      <td />
      <td>{issuedAsset.asset_class}</td>
      <td>{toDashedDate(issuedAsset.investment_date)}</td>
      <td>{quantity}</td>
      <td>{`$ ${issuedAsset.cost.$.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}</td>
    </tr>
  );
};

IssuedAssets.defaultProps = {
  issuedAsset: {},
};

IssuedAssets.propTypes = {
  issuedAsset: PropTypes.shape({
    asset_class: PropTypes.string,
    cost: PropTypes.shape({
      $: PropTypes.number,
    }),
    id: PropTypes.number,
    investment_date: PropTypes.string,
    quantity: PropTypes.number,
  }),
};


export default IssuedAssets;
