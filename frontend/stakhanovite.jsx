import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import {createBoard, updateBoard, deleteBoard} from './util/board_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.success = () => {return console.log("success!");};
  window.error = () => {return console.log("failure!");};
  window.params = {
      owner_id: 200,
      title: "1st Byelorussian Front"
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
  window.updateBoard = updateBoard;
  window.deleteBoard = deleteBoard;

});
