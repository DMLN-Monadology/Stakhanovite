import React from 'react';


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
    <div>
      {this.props.board}
    </div>
  )}
}

export default Board;
