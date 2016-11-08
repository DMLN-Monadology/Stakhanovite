import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import {createList} from './actions/list_actions';


document.addEventListener('DOMContentLoaded', () => {

  window.params1 = {
      board_id: 67,
      title: "Moscow"
  }
  window.params2 = {
      board_id: 67,
      title: "Rostov on Don"
  }
  window.params3 = {
      board_id: 67,
      title: "Leningrad"
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

  window.createList = createList;


});
