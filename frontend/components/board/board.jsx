import React from 'react';
import ListIndexItem from './list_index_item';
import ListForm from '../list_form/list_form';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBoard(this.props.params.boardId);
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
              <ListIndexItem
                key={list.id}
                list={list}
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

export default Board;
