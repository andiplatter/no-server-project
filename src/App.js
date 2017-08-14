import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './handlers/Search';
import Bookmarks from './handlers/Bookmarks';
import Profile from './handlers/Profile';
import Home from './handlers/Home';

const BasicExample = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>;
export default BasicExample;
