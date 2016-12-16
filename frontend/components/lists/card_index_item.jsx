import React from 'react';
import { DragSource } from 'react-dnd';


const cardDeparture = {
  beginDrag(props) {
    return {card: props.card}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCardDropdown: "closed"
    };
    this.handleSubmitDeleteCard = this.handleSubmitDeleteCard.bind(this);
  }

  handleSubmitDeleteCard(event) {
    event.preventDefault();
    this.props.deleteCard(this.props.card.id)
  }

  toggleCardDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.editCardDropdown === "closed" ?
      this.setState({ editCardDropdown: "open"}) :
      this.setState({ editCardDropdown: "closed"})
    }
  }

  render() {
    const connectDragSource = this.props.connectDragSource;
    const clssName = this.props.card === 'placeholder' ? 'Card placeholder' : 'Card'
    let editCardDD
    if ((this.state.editCardDropdown === "open") & (this.props.card != 'placeholder')) {
      editCardDD = (
        <div className="editCard">
          <h3>Card Options</h3>
          <p onClick={this.toggleCardDropdown()} className="CardDDReturn">
            X
          </p>
          <p onClick={this.handleSubmitDeleteCard}
            className="deleteCardButton"
            >DELETE THIS CARD
          </p>
        </div>
      )
    };

    let button
    if (this.props.card != 'placeholder') {
      button = (
        <p onClick={this.toggleCardDropdown()}
          className="cardDDButton">...</p>
      )
    }
    return connectDragSource(
      <div className={clssName}>
        <div className="CardTitle">{this.props.card.title}</div>
        {button}
        {editCardDD}
      </div>
    )
  }
}

export default DragSource('Card', cardDeparture, collect)(CardIndexItem);
