import React from 'react';
import ListIndexItem from './list_index_item';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.props.boards.forEach( (board) => {
      if (board.id === this.props.boardId) {
        this.current_board = board
      }
    });
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }


  render() {
    return (
    <div className="BoardBody">
      <h2 className="BoardBodyHeader">
        {this.current_board.title}
      </h2>
      <div className="BoardIndexBody">
        <ul>
          {
            this.current_board.lists.map( list => (
              <ListIndexItem
                key={list.id}
                list={list}
                />
            ))
          }
          {this.props.children}
        </ul>
      </div>
    </div>
  )}
}

export default Board;
