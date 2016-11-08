import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BoardsContainer from './boards/boards_container';
import NavBarContainer from './navbar/navbar_container';
import BoardFormContainer from './board_form/board_form_container';
import ProfileDropDownContainer from './navbar_dropdowns/profile_dropdown_container';
import NewBoardItemContainer from './boards/new_board_item_container';
import BoardContainer from './board/board_container';


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
        <Route path="/" component={App} />
          <Route path="/navbar" component={NavBarContainer} onEnter={_ensureSignedIn}>
            <Route path="/boards" component={BoardsContainer} onEnter={_ensureSignedIn}>
              <Route path="/boards/show" component={NewBoardItemContainer} onEnter={_ensureSignedIn} >
                <Route path="/boards/show/new" component={BoardFormContainer} onEnter={_ensureSignedIn}/>
                <Route path ="/boards/controlpanel" component={ProfileDropDownContainer} onEnter={_ensureSignedIn} />
              </Route>
            </Route>
            <Route path="/boards/owner/:boardId" component={BoardContainer} onEnter={_ensureSignedIn} />
          </Route>
          <Route path="/signin" component={SessionFormContainer} onEnter={_redirectIfSignedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfSignedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
