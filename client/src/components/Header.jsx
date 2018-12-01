import React from 'react';

const Header = ({ investment }) => (
  <tr>
    <th>{investment.name}</th>
    <th />
    <th />
    <th>{investment.quantity}</th>
    <th>{investment.cost.$}</th>
  </tr>
);

export default Header;
