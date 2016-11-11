import React from 'react';

//props needed: current_list and createCard

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      list_id: this.props.current_list.id,
      order: this.props.current_list.cards.length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.createCard(this.state);
    this.setState({
      title: "",
      list_id: this.props.current_list.id,
      order: this.props.current_list.cards.length + 1
    })
  };

  update(field) {
    return (event) => {
      this.setState( { [field]: event.currentTarget.value})
    };
  };


  render() {
    return (
      <div>
        <h4>Add a card...</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder=""
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />

        <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }

}

export default CardForm;
