import React from 'react';
import {DragSource} from 'react-dnd';
import CardForm from '../card_form/card_form';

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
  }

  render () {
    const connectDragSource = this.props.connectDragSource;

    return connectDragSource(
      <div>
        <h3>{this.props.list.title}</h3>

        {
          this.props.list.cards.map( card => (
            <div>{card.title} is here</div>
          ))
        }
        <br/>
        <CardForm current_list={this.props.list} createCard={this.props.createCard}/>

      </div>
    )
  }
}



export default DragSource('List', listDeparture, collect)(ListIndexItem);
