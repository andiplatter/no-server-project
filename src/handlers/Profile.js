import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      saved: false
    };
    this.submitProfile = this.submitProfile.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleFirstName(val) {
    this.setState({
      firstName: val
    });
  }
  handleLastName(val) {
    this.setState({
      lastName: val
    });
  }
  handleEmail(val) {
    this.setState({
      email: val
    });
  }

  submitProfile(e) {
    e.preventDefault();
    localStorage.setItem('currentUser', JSON.stringify(this.state));
    window.location.reload();
    this.setState({
      saved: true
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-container">
          <form className="profileBox" onSubmit={this.submitProfile}>
            <div className="form-wrapper">
              <p className="form-title">First Name:</p>
              <input
                type="text"
                onChange={e => this.handleFirstName(e.target.value)}
                value={this.state.firstName}
              />
            </div>
            <div className="form-wrapper">
              <p className="form-title">Last Name:</p>
              <input
                type="text"
                onChange={e => this.handleLastName(e.target.value)}
                value={this.state.lastName}
              />
            </div>
            <div className="form-wrapper">
              <p className="form-title">Email:</p>
              <input
                type="text"
                onChange={e => this.handleEmail(e.target.value)}
                value={this.state.email}
              />
            </div>
            <button className="save-button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Profile;
