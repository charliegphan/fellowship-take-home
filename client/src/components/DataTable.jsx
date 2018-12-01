import React from 'react';

import Company from './Company.jsx';

const DataTable = ({ investmentData }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Investment</th>
          <th>Asset</th>
          <th>Investment date</th>
          <th>Shares</th>
          <th>Cost</th>
        </tr>
      </tbody>
    </table>
    {investmentData.map(investment => (
      <Company
        investment={investment}
        key={investment.name}
      />
    ))}
  </div>
);

// TODO

export default DataTable;
