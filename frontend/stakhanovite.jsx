import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import {createBoard} from './actions/board_actions';


document.addEventListener('DOMContentLoaded', () => {

  window.params1 = {
      owner_id: 191,
      title: "Russian SSR"
  }
  window.params2 = {
      owner_id: 191,
      title: "Ukrainian SSR"
  }
  window.params3 = {
      owner_id: 191,
      title: "Byelorussian SSR"
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

  window.createBoard = createBoard;


});
