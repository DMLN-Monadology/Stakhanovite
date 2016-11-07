import React from 'react';
import { Link } from 'react-router';


const FunctionalBoards = (props) => (
  <div className="BoardsPage">
    <p>
      Username: {props.currentUser.username}
      <br/>
      Boards: {props.currentUser.owned_boards.length}
      <br/>
      <img src={props.currentUser.image_url}/>
    </p>
    <br/>
  </div>
);


export default FunctionalBoards;
