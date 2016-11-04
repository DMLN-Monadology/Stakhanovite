import React from 'react';
import { Link } from 'react-router';


const Boards = (props) => (
  <div className="BoardsPage">
    <h1>#Welcome to Boards#</h1>
    <p>
      Username: {props.currentUser.username}
      <br/>
      <img src={props.currentUser.image_url}/>
    </p>
    <br/>
    <button onClick={props.signout}>Sign Out</button>
  </div>
);


export default Boards;
