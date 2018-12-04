import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/CompanyHeader.css';

const CompanyHeader = ({ investment }) => (
  <tr className={styles.header}>
    <th>{investment.name}</th>
    <th />
    <th />
    <th>{investment.quantity.toLocaleString()}</th>
    <th>{`$ ${investment.cost.$.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}</th>
  </tr>
);

CompanyHeader.defaultProps = {
  investment: {},
};

CompanyHeader.propTypes = {
  investment: PropTypes.shape({
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
};

export default CompanyHeader;
