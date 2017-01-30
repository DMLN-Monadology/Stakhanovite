import React from 'react';
import BoardIndexItem from './boards_index_item';
import { Link, hashHistory } from 'react-router';


class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    return (
    <div className="Wrapper">
      <div className="BoardsIndex">
        <h2 className="BoardsIndexHeader">Your Boards</h2>
        <div className="BoardsIndexBody">
          <ul>
            {
              this.props.currentUser.owned_boards.map( board => (
                <BoardIndexItem
                  key={board.id}
                  board={board}
                  owned="true"
                  deleteBoard={this.props.deleteBoard}
                  />
              ))
            }
            {this.props.children}
          </ul>
        </div>
        <h2 className="BoardsIndexHeader">Your Groups' Boards</h2>
          <div className="BoardsIndexBody">
            <ul>
              {
                this.props.currentUser.member_boards.map( board => (
                  <BoardIndexItem
                    key={board.id}
                    board={board}
                    owned="false"
                    />
                ))
              }
            </ul>
          </div>
      </div>
    </div>
    )
  }
}

export default BoardsIndex;
