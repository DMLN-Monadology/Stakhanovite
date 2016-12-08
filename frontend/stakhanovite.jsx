import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { createMembership, deleteMembership } from './actions/board_actions';


document.addEventListener('DOMContentLoaded', () => {

  window.ele1 = {
    member_id: 185,
    board_id: 35
  }

  window.ele2 = {
    member_id: 186,
    board_id: 35
  }


  window.ele3 = {
    member_id: 187,
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
