import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

const dropDownLink = () => {
  return (event) => {
    event.preventDefault();
    hashHistory.push("/boards/controlpanel")
  };
};

const NavBar = (props) => (
      <div>
        <div className="NavBar">
          <Link to="/boards" className="NBboardLink">Boards</Link>
          <Link to="/boards" className="NBboardHeader">Stakhanovites</Link>
          <div>

            <button onClick={dropDownLink()}>
              {props.currentUser.username.slice(0,1)}
            </button>

            <button onClick={dropDownLink()}>
              {props.currentUser.username}
            </button>
          </div>
        </div>
        {props.children}
      </div>
);

export default withRouter(NavBar);


// <button onClick={props.signout} className="NBSignOut">Sign Out</button>
