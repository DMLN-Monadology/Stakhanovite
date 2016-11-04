import {hashHistory} from 'react-router'


//ACTIONS
import {SIGN_IN,
        SIGN_OUT,
        SIGN_UP,
        receiveCurrentUser,
        receiveErrors
} from '../actions/session_actions';

import { CREATE_BOARD,
         receiveBoard
} from '../actions/board_actions';


//api utilities
import { signin, signup, signout } from '../util/session_api_util';
import {createBoard } from '../util/board_api_util';


const SessionMiddleware = store => next => action => {

  const userSuccessCallback = (user) => store.dispatch(receiveCurrentUser(user));
  const userErrorCallback = (errors) => store.dispatch(receiveErrors(errors.responseJSON));

  const boardSuccessCallback = (board) => store.dispatch(receiveBoard(board));
  const testErrorCB = () => {return console.log("failure!");};

  switch(action.type){
    case SIGN_UP:
      signup(action.user, userSuccessCallback, userErrorCallback)
      return next(action);
    case SIGN_IN:
      signin(action.user, userSuccessCallback, userErrorCallback)
      return next(action);
    case SIGN_OUT:
      signout( () => {
        hashHistory.push("/");
        next(action)
        });
      break;
    // Boards
    case CREATE_BOARD:
      createBoard(action.board, boardSuccessCallback, testErrorCB)
      next(action);
    default:
      return next(action);
  }
}

export default SessionMiddleware;
