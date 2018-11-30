import React from 'react';
import PropTypes from 'prop-types';

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
    </tbody>
  </table>

);

export default Company;

Company.defaultProps = {
  investment: [],
};
