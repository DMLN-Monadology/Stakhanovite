import React from 'react';
import BoardIndexItem from './boards_index_item';
import { Link, hashHistory } from 'react-router';


class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="BoardsIndex">
        <h2 className="BoardsIndexHeader">Your Boards</h2>
        <div className="BoardsIndexBody">
          <ul>
            {
              this.props.currentUser.owned_boards.map( board => (
                <BoardIndexItem
                  key={board.id}
                  board={board}
                  />
              ))
            }
            {this.props.children}
          </ul>
        </div>

      </div>
    )
  }
}

export default BoardsIndex;
