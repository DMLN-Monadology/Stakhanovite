import React from 'react';
import { Link } from 'react-router';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", owner_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBoard(this.state)
    this.props.router.push("/boards/show");
  }

  update(field) {
    return (event) => {
      this.setState({   [field]: event.currentTarget.value})
    };
  }

  render() {
    return (
      <div className="NewBoardBox">

        <div className="NewBoardHeader">
          <h3>Create Board</h3>
          <Link to={`/boards/show`}>x</Link>
        </div>

        <h4>Title</h4>
        <form onSubmit={this.handleSubmit}>
          <label className="NewBoardFormElement">
            <input
              placeholder="Like 'Increase wheat production by 500%'"
              type="textarea"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>

          <input type="submit" value="Create" className="submitBoardButton" />
        </form>
      </div>
    )
  }
}

export default BoardForm;
