import React from 'react';
import { Link } from 'react-router';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.deleteBoard(this.props.board.id);
  }

  render() {
    let deleteBoardDD
    if (this.props.owned == "true") {
      deleteBoardDD = (
        <button onClick={this.handleSubmit}>
          -
        </button>
      )
    }
    return (
      <li className="BoardIndexItem">
        <Link to={`/boards/owner/${this.props.board.id}`}>
          {this.props.board.title}
        </Link>
        {deleteBoardDD}
      </li>
    )
  }

}


export default BoardIndexItem;
