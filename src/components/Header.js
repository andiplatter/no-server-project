import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        {this.props.showProfile
          ? <div>
              Name: <span className="headerName">{this.props.firstName}</span>
            </div>
          : null}
      </div>
    );
  }
}
export default Header;
