import React from 'react';
import { Link, hashHistory } from 'react-router'

const newBoard = () => {
  return (event) => {
    event.preventDefault();
    hashHistory.push("/boards/show/new"); //no longer new
  };
};

const NewBoardItem = (props) => (
  <li className ="NewBoardIndexItem">
    <button onClick={newBoard()}>
      Create new board...
    </button>
    {props.children}
  </li>
);

export default NewBoardItem;
