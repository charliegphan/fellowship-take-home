import React from 'react';

import styles from '../../../styles/TableHeader.css';

const TableHeader = () => (
  <div>
    <table className={styles.header}>
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
  </div>
);

export default TableHeader;
