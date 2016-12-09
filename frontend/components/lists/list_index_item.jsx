import React from 'react';
import { DragSource } from 'react-dnd';
import CardForm from '../card_form/card_form';
import CardSlot from './card_slot';

const listDeparture = {
  beginDrag(props) {
    return {list: props.list}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDropdown: "closed",
      editListDropdown: "closed"
    };

    this.handleSubmitDeleteList = this.handleSubmitDeleteList.bind(this);

  }

  handleSubmitDeleteList(event) {
    event.preventDefault();
    this.props.deleteList(this.props.list.id)
  }

  toggleCardDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.cardDropdown === "closed" ?
      this.setState({ cardDropdown: "open"}) :
      this.setState({ cardDropdown: "closed"})
    }
  }

  toggleListDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.editListDropdown === "closed" ?
      this.setState({ editListDropdown: "open"}) :
      this.setState({ editListDropdown: "closed"})
    }
  }


  render() {
    let newCardDD;
    if (this.state.cardDropdown === "open") {
      newCardDD = (
        <div className="CardFormContainer">
          <CardForm current_list={this.props.list} createCard={this.props.createCard}/>
          <button onClick={this.toggleCardDropdown()} className="CardDDReturn">
            X
          </button>
        </div>
      )
    };

    let editListDD;
    if (this.state.editListDropdown === "open") {
      editListDD = (
        <div className="editList">
          <h3>{this.props.list.title}</h3>
          <button onClick={this.toggleListDropdown()} className="CardDDReturn">
            X
          </button>
          <p onClick={this.handleSubmitDeleteList}
            className="deleteListButton"
            >DELETE THIS LIST
          </p>
        </div>
      )
    }

    let placeholder;
    if (this.props.list.cards.length === 0) {
      placeholder = (
        <CardSlot
          card="placeholder"
          listId={this.props.list.id}
          order={this.props.list.cards.length}
          restructureCard={this.props.restructureCard}
        />
      )
    } else {
      placeholder = (
        <CardSlot
          card="placeholder"
          listId={this.props.list.id}
          order={this.props.list.cards.length - 1}
          restructureCard={this.props.restructureCard}
        />
      )
    }

    const connectDragSource = this.props.connectDragSource;

    return connectDragSource(
      <div className="List">
        <h3 className="ListTitle">{this.props.list.title}</h3>
        <div className="editListContainer">
          <button onClick={this.toggleListDropdown()} className="listDDButton">...</button>
          {editListDD}
        </div>

        {
          this.props.list.cards.map( card => (
            <CardSlot
              key={card.id}
              card={card}
              listId={card.list_id}
              order={card.order}
              restructureCard={this.props.restructureCard}
              />
          ))
        }

        <CardSlot
          card="placeholder"
          listId={this.props.list.id}
          order={this.props.list.cards.length}
          restructureCard={this.props.restructureCard}
        />

        <br/>
        <div className="CardFormDD">
          <button onClick={this.toggleCardDropdown()} className="CardDDButton">
            Add a card...
          </button>
          {newCardDD}
        </div>

      </div>
    )
  }
}



export default DragSource('List', listDeparture, collect)(ListIndexItem);
