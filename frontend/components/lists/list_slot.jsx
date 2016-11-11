import React from 'react';
import {DropTarget} from 'react-dnd';

import ListIndexItem from './list_index_item';

const listArrival = {
  drop(props, monitor) {
    const arrivingList = monitor.getItem().list;
    if (arrivingList.order !== props.order) {
      arrivingList.order = props.order;
      props.restructureList(arrivingList)
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class ListSlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const connectDropTarget = this.props.connectDropTarget;

    return connectDropTarget(
      <div className="ListSlot">
        <ListIndexItem list={this.props.list} createCard={this.props.createCard}/>
      </div>
    )
  }
}

export default DropTarget('List', listArrival, collect)(ListSlot);
