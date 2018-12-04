import React from 'react';
import PropTypes from 'prop-types';

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

DatePicker.defaultProps = {
  handleDatePick: () => {},
};

DatePicker.propTypes = {
  handleDatePick: PropTypes.func,
};

export default DatePicker;
