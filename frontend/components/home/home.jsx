import React from 'react';
import { Link } from 'react-router';

const SessionLinks = () => (
  <nav className="signin_signup">
    <Link to= "/signin">Sign in</Link>
    <Link to= "/signup">Sign up</Link>
  </nav>
);

const Home = () => (
  <div>
    <div className="logo">
      Stakhanovites
    </div>
    <SessionLinks />
  </div>
);


export default Home;
