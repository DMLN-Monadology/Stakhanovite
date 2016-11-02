import {SIGN_IN,
        SIGN_OUT,
        SIGN_UP,
        receiveCurrentUser,
        receiveErrors
} from '../actions/session_actions';

import {hashHistory} from 'react-router'

import { signin, signup, signout } from '../util/session_api_util';

const SessionMiddleware = store => next => action => {

  const successCallback = (user) => store.dispatch(receiveCurrentUser(user))
  const errorCallback = (errors) => store.dispatch(receiveErrors(errors.responseJSON))

  switch(action.type){
    case SIGN_UP:
      signup(action.user, successCallback, errorCallback)
      return next(action);
    case SIGN_IN:
      signin(action.user, successCallback, errorCallback)
      return next(action);
    case SIGN_OUT:
      signout( () => {
        hashHistory.push("/");
        next(action)
        });
      break;
    default:
      return next(action);
  }
}

export default SessionMiddleware;
