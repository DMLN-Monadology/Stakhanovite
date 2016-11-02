import React from 'react';
import { Link } from 'react-router';

const SessionLinks = () => (
  <nav>
    <Link to= "/signin">Sign in</Link>
    <br/>
    <Link to= "/signup">Sign up</Link>
  </nav>
);

const Home = () => (
  <navbar>
    <h1>#HOME PAGE OF THE STAKHANOVITES#</h1>
    <SessionLinks />
  </navbar>
);


export default Home;
