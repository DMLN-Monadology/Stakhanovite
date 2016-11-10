import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListForm from '../list_form/list_form';
import ListSlot from '../lists/list_slot.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.current_board || this.props.current_board.id !== parseInt(newProps.params.boardId))
      {this.props.fetchBoard(newProps.params.boardId)};
  }



  render() {
    if (!this.props.current_board) {return (
      <div>loading</div>
    )}
    return (
    <div className="BoardBody">
      <h2 className="BoardBodyHeader">
        {this.props.current_board.title}
      </h2>
      <div className="BoardIndexBody">
        <ul>
          {
            this.props.current_board.lists.map( list => (
              <ListSlot
                key={list.id}
                list={list}
                order={list.order}
                restructureList={this.props.restructureList}
                />
            ))
          }
          <ListForm
            current_board={this.props.current_board}
            createList={this.props.createList}
            />
        </ul>
      </div>
    </div>
  )}
}

export default DragDropContext(HTML5Backend)(Board);
