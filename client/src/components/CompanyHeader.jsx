import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ investment }) => (
  <tr>
    <th>{investment.name}</th>
    <th />
    <th />
    <th>{investment.quantity}</th>
    <th>{investment.cost.$}</th>
  </tr>
);

Header.defaultProps = {};
Header.propTypes = {};

export default Header;
