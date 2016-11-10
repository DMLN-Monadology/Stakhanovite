import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { restructureList } from './actions/list_actions';


document.addEventListener('DOMContentLoaded', () => {

  window.ele1 = {
    id: 56,
    order: 0,
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

  window.restructureList = restructureList;


});
