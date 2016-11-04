
import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        SIGN_OUT} from '../actions/session_actions';

import { RECEIVE_BOARD } from '../actions/board_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    //Users
    case RECEIVE_CURRENT_USER:
      return merge({}, defaultState, {["currentUser"]: action.currentUser})
    case RECEIVE_ERRORS:
      return merge({}, defaultState, {["errors"]: action.errors});
    case SIGN_OUT:
      return merge({}, defaultState);
    //Boards
    case RECEIVE_BOARD:
      console.log("made it to reducer ... updating state");
      let newState = merge({}, oldState);
      newState.currentUser.owned_boards.push(action.board);
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;
