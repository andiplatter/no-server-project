import React, { Component } from 'react';

class ProfileInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  };
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName
    });
  }
  render() {
    return (
      <div className="Name-header">
        <h2>
          Name: {`${this.state.firstName} ${this.state.lastName}`}
        </h2>
      </div>
    );
  }
}

export default ProfileInfo;
