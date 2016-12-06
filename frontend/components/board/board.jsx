import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListForm from '../list_form/list_form';
import ListSlot from '../lists/list_slot';
import SearchResultItem from './member';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: "closed",
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  componentWillMount() {
    this.props.fetchBoard(this.props.boardId);
    this.props.fetchUsersSearches();
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.current_board || this.props.current_board.id !== parseInt(newProps.boardId))
    {this.props.fetchBoard(newProps.boardId)};
  }

  toggleDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.dropdown === "closed" ? this.setState({ dropdown: "open"}) : this.setState({ dropdown: "closed"})
    }
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.all_users;
    }

    this.props.all_users.forEach(user => {
      let sub = user.username.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(user);
      }
    });

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }


  render() {
    if (!this.props.current_board) {return (
      <div>loading</div>
    )};
    let results = this.matches().map((result, i) => {
      return (
        <SearchResultItem
          key={result.id}
          username={result.username}
          profile_pic={result.image_url}
        />
      );
    });
    let dropDown;
    if (this.state.dropdown === "open") {
      dropDown = (
        <div className="UsersSearch">
          <h3>Members</h3>
          <button onClick={this.toggleDropdown()} className="SearchReturn">
            x
          </button>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='e.g. Valentina Tereshkova'/>
          <ul className="ResultList">
              <ReactCSSTransitionGroup
                transitionName='auto'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {results}
              </ReactCSSTransitionGroup>
            </ul>
        </div>
        )
    };
    return (
    <div className="BoardBody">
      <div className="BoardBodyHeader">
        <h2>
          {this.props.current_board.title}
        </h2>

        <button onClick={this.toggleDropdown()} className="AddMember">
          Add Members ...
        </button>
        {dropDown}
      </div>
      <div className="BoardIndexBody">
        <ul>
          {
            this.props.current_board.lists.map( list => (
              <ListSlot
                key={list.id}
                list={list}
                order={list.order}
                restructureList={this.props.restructureList}
                createCard={this.props.createCard}
                restructureCard={this.props.restructureCard}
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
