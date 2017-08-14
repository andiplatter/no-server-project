import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () =>
  <div className="App">
    <div className="Home-header">
      <h1>WELCOME TO REDDIT READER</h1>
    </div>
    <p>
      Reddit reader allows you to bookmark reddit stories so you can read them
      later or look back at them!
    </p>
    <h1>
      To get started make a profile{' '}
      <Link className="home-link" to="/profile">
        here
      </Link>
    </h1>
  </div>;

export default Home;
