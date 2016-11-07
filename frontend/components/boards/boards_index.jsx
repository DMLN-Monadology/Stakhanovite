import React from 'react';
import BoardIndexItem from './board_index_item';


class BoardsIndex extends React.Component {
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
  }

  update(field) {
    return (event) => {
      this.setState({   [field]: event.currentTarget.value})
    };
  }

  render(){
    return (
      <div>
        <h2 className="BoardsIndexHeaders">Your Boards</h2>
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

            <li className="NewBoardBox">
              <form onSubmit={this.handleSubmit}>
                <h3>Create Board</h3>
                <label> Title
                  <input
                    placeholder="Like 'Increase wheat production by 500%' for example.."
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                  />
                </label>

                <input type="submit" value="Create" className="submitButton" />
              </form>
            </li>

          </ul>
        </div>

      </div>
    );
  }

}

export default BoardsIndex;
