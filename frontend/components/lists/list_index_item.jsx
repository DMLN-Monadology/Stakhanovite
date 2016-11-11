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
    this.state = {cardDropdown: "closed"};
  }

  toggleDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.cardDropdown === "closed" ?
      this.setState({ cardDropdown: "open"}) :
      this.setState({ cardDropdown: "closed"})
    }
  }


  render() {
    let dropDown;
    if (this.state.cardDropdown === "open") {
      dropDown = (
        <div className="CardFormContainer">
          <CardForm current_list={this.props.list} createCard={this.props.createCard}/>
          <button onClick={this.toggleDropdown()} className="CardDDReturn">
            X
          </button>
        </div>
      )
    };

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
          <button onClick={this.toggleDropdown()} className="CardDDButton">
            Add a card...
          </button>
          {dropDown}
        </div>

      </div>
    )
  }
}



export default DragSource('List', listDeparture, collect)(ListIndexItem);
