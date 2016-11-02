import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {signup, signin, signout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore()
  const root = document.getElementById('root');

  ReactDOM.render(<h1>Welcome to Stakhanovite, under Construction</h1>, root);

  window.store = configureStore()

  window.success = () => {return console.log("success!");};
  window.error = () => {return console.log("failure!");};
  window.params = {
      username: "Vatutin",
      password: "By"
  }


  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
});
