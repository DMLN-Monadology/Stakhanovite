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

  componentWillReceiveProps(newProps) {
    this.setState({
      title: "",
      board_id: newProps.current_board.id,
      order: newProps.current_board.lists.length
    })
  };


  handleSubmit(event) {
    event.preventDefault();
    this.props.createList(this.state);
    this.setState({
      title: "",
      board_id: "",
      order: (this.props.current_board.lists.length + 1 )
    })
  };

  update(field) {
    return (event) => {
      this.setState( { [field]: event.currentTarget.value })
    };
  }

  toggleFormOn() {
    return (event) => {
      event.preventDefault();
      $(".NewListForm").css({
        display: "flex"
      })
    };
  };

  toggleFormOff() {
    return (event) => {
      event.preventDefault();
      $(".NewListForm").css({
        display: "none"
      })
    };
  };

  render() {
    return (
      <div className="NewListWrapper">
        <button onClick={this.toggleFormOn()} className="NewListButton">Add a list...</button>
        <form onSubmit={this.handleSubmit} className="NewListForm">
          <input className="NewListFormInput"
            placeholder="Add a list..."
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />

        <input type="submit" value="Save" className="NewListFormSubmit"/>
        <button onClick={this.toggleFormOff()} className="NewListButtonOff">X</button>
        </form>
      </div>
    )
  }
}

export default ListForm;
