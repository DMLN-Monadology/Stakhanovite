import React from 'react';
import BoardIndexItem from './boards_index_item';
import { Link, hashHistory } from 'react-router';


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
        {props.children}
      </ul>
    </div>
  </div>
)

export default BoardsIndex;
