import React from 'react';

import styles from '../../../styles/DatePicker.css';

const DatePicker = ({ handleDatePick }) => (
  <div className={styles.container}>
    <p>Load date:</p>
    <input
      type="date"
      onChange={e => handleDatePick(e.target.value)}
    />
  </div>
);

export default DatePicker;
