import React from 'react';
import { Link } from 'react-router';


const Boards = (props) => (
  <div>
    <h1>#Welcome to Boards#</h1>
    <p>
      Username: {props.currentUser.username}
    </p>
    <br/>
    <button onClick={props.signout}>Sign Out</button>
  </div>
);


export default Boards;
