import React from 'react';

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

