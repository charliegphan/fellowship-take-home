import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ investment }) => (
  <tr>
    <th>{investment.name}</th>
    <th />
    <th />
    <th>{investment.quantity.toLocaleString()}</th>
    <th>{`${investment.cost.$.toLocaleString(undefined, { minimumFractionDigits: 2 })} $`}</th>
  </tr>
);

Header.defaultProps = {};
Header.propTypes = {};

export default Header;
