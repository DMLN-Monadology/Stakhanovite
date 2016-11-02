import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BoardsContainer from './boards/board_container';



const Root = ({ store }) => {

  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (!currentUser) {
        replace('/signin');
      }
    };

  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/boards');
      }
    };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/boards" component={BoardsContainer} onEnter={_ensureSignedIn} />
        <Route path="/signin" component={SessionFormContainer} onEnter={_redirectIfSignedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfSignedIn} />
      </Router>
    </Provider>
  );
};

export default Root;

//  <Route path="/boards" component={BoardContainer}/>
