
import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        SIGN_OUT} from '../actions/session_actions';

import { RECEIVE_BOARD, RECEIVE_BOARD_SHOW, RECEIVE_CURRENT_BOARD } from '../actions/board_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState
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
      newState = merge({}, oldState);
      newState.currentUser.owned_boards.push(action.board);
      return newState;
    case RECEIVE_BOARD_SHOW:
      newState = merge({}, oldState, {["current_board"]: action.board});
      newState.current_board.lists = action.board.lists;
      return newState;
    //Lists
    default:
      return oldState;
  }
}

export default SessionReducer;
