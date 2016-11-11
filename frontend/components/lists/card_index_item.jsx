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
    const clssName = this.props.card === 'placeholder' ? 'Card placeholder' : 'Card'
    return connectDragSource(
      <div className={clssName}>
        <div className="CardTitle">{this.props.card.title}</div>
      </div>
    )
  }
}

export default DragSource('Card', cardDeparture, collect)(CardIndexItem);
