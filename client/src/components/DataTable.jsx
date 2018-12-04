import React from 'react';
import PropTypes from 'prop-types';

import Company from './Company.jsx';
import TotalCost from './TotalCost.jsx';
import TableHeader from './TableHeader.jsx';

const DataTable = ({ investmentData, totalCost }) => (
  <div>
    <TableHeader />

    {investmentData.map(investment => (
      <Company
        investment={investment}
        key={investment.name}
      />
    ))}

    <TotalCost totalCost={totalCost} />
  </div>
);

DataTable.defaultProps = {
  investmentData: [],
  totalCost: 0,
};

DataTable.propTypes = {
  investmentData: PropTypes.arrayOf(
    PropTypes.shape({
      investment: PropTypes.shape({
        cost: PropTypes.shape({
          $: PropTypes.number,
        }),
        id: PropTypes.number,
        issued_assets: PropTypes.arrayOf(
          PropTypes.shape({
            asset_class: PropTypes.string,
            cost: PropTypes.shape({
              $: PropTypes.number,
            }),
            id: PropTypes.number,
            investment_date: PropTypes.string,
            quantity: PropTypes.number,
          }),
        ),
        name: PropTypes.string,
        quantity: PropTypes.number,
      }),
    }),
  ),
  totalCost: PropTypes.number,
};

export default DataTable;
