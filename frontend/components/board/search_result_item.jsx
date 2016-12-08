import React from 'react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member_id: this.props.user_id, board_id: this.props.current_board_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMembership(this.state);
  }

  render() {
    return (
      <li className="SearchResultItem">
        <p>{this.props.username}</p>
        <button onClick={this.handleSubmit}>+</button>
      </li>
    )
  }

}

export default SearchResultItem;
