import React from 'react';


class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      board_id: this.props.current_board.id,
      order: this.props.current_board.lists.length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(event) {
    event.preventDefault();
    this.props.createList(this.state);
    this.setState({
      title: "",
      board_id: this.props.current_board.id,
      order: (this.props.current_board.lists.length + 1 )
    })
  }

  update(field) {
    return (event) => {
      this.setState( { [field]: event.currentTarget.value })
    };
  }

  render() {
    return (
      <div>
        <h4>New List</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add a list..."
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />

        <input type="submit" value="Save" />

        </form>
      </div>
    )
  }
}

export default ListForm;
