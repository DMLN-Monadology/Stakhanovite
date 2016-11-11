import React from 'react';
import { DropTarget } from 'react-dnd';

import CardIndexItem from './card_index_item';

const cardArrival = {
  drop(props, monitor) {
    const arrivingCard = monitor.getItem().card;
    if (props.card === "placeholder") {
      console.log("you are moving to an empty list");
    } else if (arrivingCard.list_id !== props.card.list_id) {
      console.log("you are moving between lists")
    } else if (arrivingCard.order !== props.order) {
      console.log("you are moving within lists")
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class CardSlot extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const connectDropTarget = this.props.connectDropTarget;

    return connectDropTarget(
      <div className="CardSlot">
        <CardIndexItem
          card={this.props.card}
          />
      </div>
    )
  }
}


export default DropTarget('Card', cardArrival, collect)(CardSlot);
