import React from 'react';

import Company from './Company.jsx';

const DataTable = ({ investmentData }) => {
  return (
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
};

export default DataTable;
