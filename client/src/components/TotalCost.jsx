import React from 'react';
import PropType from 'prop-types';

import styles from '../../../styles/TotalCost.css';

const TotalCost = ({ totalCost }) => (
  <div>
    <table className={styles.totalCost}>
      <tbody>
        <tr>
          <th>Total Cost</th>
          <th />
          <th />
          <th />
          <th>{`$ ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}</th>
        </tr>
      </tbody>
    </table>
  </div>
);

TotalCost.propTypes = {
  totalCost: PropType.number,
};

TotalCost.defaultProps = {
  totalCost: 0,
};

export default TotalCost;
