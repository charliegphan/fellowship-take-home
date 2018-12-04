import React, { Component } from 'react';
import axios from 'axios';

import DataTable from './DataTable.jsx';
import Description from './Description.jsx';
import DatePicker from './DatePicker.jsx';

import addTotalCost from '../../../helpers/totalCost.js';

import styles from '../../../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investmentData: [],
      totalCost: 0,
    };

    this.handleDatePick = this.handleDatePick.bind(this);
  }

  componentDidMount() {
    axios.get(
      'https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json'
    ).then((response) => {
      this.setState({
        investmentData: response.data,
        totalCost: addTotalCost(response.data),
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleDatePick(date) {
    window.location.search = `date=${date}`;
  };

  render() {
    const { investmentData, totalCost } = this.state;
    return (
      <div className={styles.container}>
        <Description />
        <DatePicker 
          handleDatePick={this.handleDatePick}
        />
        <DataTable
          investmentData={investmentData}
          totalCost={totalCost}
        />
      </div>
    );
  }
}

export default App;
