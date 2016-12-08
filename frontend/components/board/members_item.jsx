import React from 'react';

class MemberItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.deleteMembership(this.props.assoc_id);
  }

  render() {
    return (
      <li className="MemberItem">
        <p>{this.props.username}</p>
        <button onClick={this.handleSubmit}>-</button>
      </li>
    )
  }

}

export default MemberItem;
