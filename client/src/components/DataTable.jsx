import React from 'react';

const DataTable = ({ investmentData }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Investment</th>
          <th>Asset</th>
          <th>Investment date</th>
          <th>Shares</th>
          <th>Cost</th>
        </tr>
        {investmentData.map()}
      </tbody>
   </table>
  )
};

export default DataTable

// <tr>
// <td>
//   hello2
//   </td>
// <td>hello3</td>
// <td>hello4</td>
// <td>hello5</td>
// </tr>