
import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        SIGN_OUT} from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, defaultState, {["currentUser"]: action.currentUser})
    case RECEIVE_ERRORS:
      return merge({}, defaultState, {["errors"]: action.errors});
    case SIGN_OUT:
      return merge({}, defaultState);
    default:
      return oldState;
  }
}

export default SessionReducer;
