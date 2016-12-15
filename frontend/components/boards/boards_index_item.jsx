import React from 'react';
import { Link } from 'react-router';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BoardDropdown: "closed"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.deleteBoard(this.props.board.id);
  }

  toggleBoardDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.BoardDropdown === "closed" ?
      this.setState({ BoardDropdown: "open"}) :
      this.setState({ BoardDropdown: "closed"})
    }
  }

  render() {
      let DDButton = (
        <p onClick={this.toggleBoardDropdown()}
          className="BoardDDButton">...</p>
      )
    let deleteBoardDD
    if ((this.props.owned == "true") & this.state.BoardDropdown === "open") {
      deleteBoardDD = (
        <div className="BoardDD">
          <h3>Board Options</h3>
          <p onClick={this.toggleBoardDropdown()} className="BoardDDReturn">X</p>
          <p onClick={this.handleSubmit} className="deleteBoardButton">
            DELETE THIS BOARD
          </p>
        </div>
      )
    }
    return (
      <li className="BoardIndexItem">
        <Link to={`/boards/owner/${this.props.board.id}`}>
          {this.props.board.title}
        </Link>
        {DDButton}
        {deleteBoardDD}
      </li>
    )
  }

}


export default BoardIndexItem;
