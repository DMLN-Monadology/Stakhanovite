import React from 'react';
import {DragSource} from 'react-dnd';


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
        {this.props.list.title}
      </div>
    )
  }
}



export default DragSource('List', listDeparture, collect)(ListIndexItem);
