
import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        SIGN_OUT} from '../actions/session_actions';

import { RECEIVE_BOARD, RECEIVE_BOARD_SHOW } from '../actions/board_actions';

import { RECEIVE_LIST } from '../actions/list_actions';

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
      return newState;
    //Lists
    case RECEIVE_LIST:
      newState = merge({}, oldState)
      newState.current_board.lists.push(action.list);
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;
