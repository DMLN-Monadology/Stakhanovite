import React from 'react';
import BoardIndexItem from './board_index_item';
import { Link, hashHistory } from 'react-router';

const newBoard = () => {
  return (event) => {
    event.preventDefault();
    hashHistory.push("/boards/new");
  };
};

const BoardsIndex = (props) => (
  <div>
    <h2 className="BoardsIndexHeaders">Your Boards</h2>
    <div className="BoardsIndexBody">
      <ul>
        {
          props.currentUser.owned_boards.map( board => (
            <BoardIndexItem
              key={board.id}
              board={board}
              />
          ))
        }

        <li className ="NewBoardIndexItem">
          <button onClick={newBoard()}>
            Create new board...
          </button>
        </li>

      </ul>
      {props.children}
    </div>

  </div>
)

export default BoardsIndex;
