import React from 'react';
import { Link } from 'react-router';


const Boards = (props) => (
  <div className="BoardsPage">
    <p>
      Username: {props.currentUser.username}
      <br/>
      Boards: {props.currentUser.owned_boards.length}
      <br/>
      <img src={props.currentUser.image_url}/>
    </p>
    <br/>
    <button onClick={props.signout}>Sign Out</button>
  </div>
);


export default Boards;
