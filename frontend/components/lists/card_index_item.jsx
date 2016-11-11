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
  }

  render() {
    const connectDragSource = this.props.connectDragSource;

    return connectDragSource(
      <div>
        <h4>{this.props.card.title}</h4>
      </div>
    )
  }
}

export default DragSource('Card', cardDeparture, collect)(CardIndexItem);
