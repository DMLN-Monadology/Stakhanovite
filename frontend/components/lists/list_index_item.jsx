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
  }



  render() {


    const connectDragSource = this.props.connectDragSource;

    return connectDragSource(
      <div>
        <h3>{this.props.list.title}</h3>

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
        <CardForm current_list={this.props.list} createCard={this.props.createCard}/>

      </div>
    )
  }
}



export default DragSource('List', listDeparture, collect)(ListIndexItem);
