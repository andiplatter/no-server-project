import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './handlers/Home';
import Profile from './handlers/Profile';
import Search from './handlers/Search';
import Bookmarks from './handlers/Bookmarks';
import ProfileInfo from './components/ProfileInfo';
const BasicExample = () =>
  <Router>
    <div>
      <ul className="App-list">
        <li>
          <Link className="Home-Link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="Profile-Link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="Search-Link" to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link className="Bookmarks-Link" to="/bookmarks">
            Bookmarks
          </Link>
        </li>
      </ul>
      <hr />
      <ProfileInfo />
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>;
export default BasicExample;
