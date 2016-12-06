import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { createMembership, deleteMembership } from './util/board_api_util';


document.addEventListener('DOMContentLoaded', () => {

  window.ele1 = {
    member_id: 176,
    board_id: 35
  }


  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  }else{
    store = configureStore();
  }
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);

  window.store = store

  window.createMembership = createMembership;

  window.deleteMembership = deleteMembership;


});
