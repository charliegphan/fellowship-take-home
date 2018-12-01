import React from 'react';

import Company from './Company.jsx';
import TotalCost from './TotalCost.jsx';

const DataTable = ({ investmentData, totalCost }) => (
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

    <TotalCost totalCost={totalCost} />
  </div>
);

// TODO PROPTYPES

export default DataTable;
