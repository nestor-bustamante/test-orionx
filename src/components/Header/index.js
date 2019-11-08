import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {

    const { title, date, invoiceNumber } = this.props;

    return (
      <div className="container-invoice">
        <div className="title">
          {title}
          <span className="date">{date}</span>
        </div>
        <div className="number">#{invoiceNumber}</div>
      </div>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    invoiceNumber: PropTypes.string.isRequired
  }
  
}

export default Header;