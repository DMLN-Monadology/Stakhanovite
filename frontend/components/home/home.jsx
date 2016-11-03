import React from 'react';
import { Link } from 'react-router';

const SessionLinks = () => (
  <ul className="signin_signup">
    <li className="signinButton">
      <Link to= "/signin">Sign In</Link>
    </li>
    <li className="signupButton">
      <Link to= "/signup">Sign Up</Link>
    </li>
  </ul>
);

const Home = () => (
  <div className="homeHeader">
    <div className="logo">
      Stakhanovites
    </div>
    <SessionLinks />
  </div>
);


export default Home;
