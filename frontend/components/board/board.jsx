import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListForm from '../list_form/list_form';
import ListSlot from '../lists/list_slot';
import SearchResultItem from './search_result_item';
import MemberItem from './members_item';

import merge from 'lodash/merge';


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
    this.processUsers = this.processUsers.bind(this);
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

  processUsers() {
    let memberIds = [];
    let assocIds = [];

    this.props.current_board.members.forEach(member => {
      memberIds.push(member.member_id);
      assocIds.push(member.id);
    });

    let members = [];
    let nonMembers = [];

    let idx
    let augmenteduser

    this.props.all_users.forEach(user => {
      idx = memberIds.indexOf(user.id)
      if (idx === -1) {
        nonMembers.push(user);
      } else {
        augmenteduser = merge({}, user, {["assoc_id"]: assocIds[idx]});
        members.push(augmenteduser);
      }
    });

    return [members, nonMembers]

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
    let test = this.processUsers();
    let members = test[0];
    let nonMembers = test[1];
    let results = this.matches().map((result, i) => {
      return (
        <SearchResultItem
          key={result.id}
          username={result.username}
          image_url={result.image_url}
        />
      );
    });
    let registeredMembers = members.map((member, i) => {
      return (
        <MemberItem
          key={member.id}
          username={member.username}
          image_url={member.image_url}
          assoc_id={member.assoc_id}
        />
      );
    });
    let dropDown;
    if (this.state.dropdown === "open") {
      dropDown = (
        <div className="UsersSearch">
          <h3>Manage Members</h3>
          <button onClick={this.toggleDropdown()} className="SearchReturn">
            x
          </button>
          <div className="UsersSearchBody">
            <div className="Members">
              <h3>current members</h3>
              <ul className="MembersList">
                <ReactCSSTransitionGroup
                  transitionName='auto'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  {registeredMembers}
                </ReactCSSTransitionGroup>
              </ul>
            </div>
            <div className="NonMembers">
              <h3>add members</h3>
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
          </div>



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
          Manage Members
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
