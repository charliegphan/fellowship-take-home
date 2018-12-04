import React from 'react';
import PropTypes from 'prop-types';
import IssuedAsset from './IssuedAssets.jsx';
import CompanyHeader from './CompanyHeader.jsx';

import styles from '../../../styles/Company.css';

class Company extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAssets: false,
    };
  }

  handleExpand() {
    const { showAssets } = this.state;
    this.setState({
      showAssets: !showAssets,
    });
  }

  render() {
    const { investment } = this.props;
    const { showAssets } = this.state;

    let assets;
    let style;
    if (showAssets) {
      assets = investment.issued_assets.map(issuedAsset => (
        <IssuedAsset
          issuedAsset={issuedAsset}
          key={issuedAsset.id}
        />
      ));
      style = styles.companyExpanded;
    } else {
      style = styles.companyCollapsed;
    }

    return (
      <div 
        className={styles.container}
        onClick={() => this.handleExpand()}
        >
        <table className={style}>
          <tbody>
            <CompanyHeader investment={investment} />
            {assets}
          </tbody>
        </table>
      </div>
    );
  }
}

Company.propTypes = {
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
};

Company.defaultProps = {
  investment: [],
};

export default Company;
