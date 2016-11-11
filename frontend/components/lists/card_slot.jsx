import React from 'react';
import { DropTarget } from 'react-dnd';

import CardIndexItem from './card_index_item';

const cardArrival = {
  drop(props, monitor) {
    const arrivingCard = monitor.getItem().card;
    if (arrivingCard.list_id !== props.listId || arrivingCard.order !== parseInt(props.order)) {
      arrivingCard.list_id = props.listId
      arrivingCard.order = parseInt(props.order)
      props.restructureCard(arrivingCard)
    };
  }
};


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
