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

const WelcomeMessage = () => (
  <div className="homeBody">
    <h2>
      Stakhanovites lets you work more collaboratively and get more done.
    </h2>
    <p>
      Stakhanovites's boards, lists, and cards enable you to organize and prioritize
      projects in a fun, flexible, and rewarding way.
    </p>
  </div>
);

const Home = () => (
  <div className="homePage">
    <div className="homeHeader">
      <div className="logo">
        Stakhanovites
      </div>
      <SessionLinks />
    </div>
    <WelcomeMessage />
  </div>

);


export default Home;
