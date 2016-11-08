import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import ProfileDropDownContainer from '../navbar_dropdowns/profile_dropdown_container';

const dropDownLink = () => {
  return (event) => {
    event.preventDefault();
    hashHistory.push("/boards/controlpanel")
  };
};

const NavBar = (props) => (
      <div>
        <div className="NavBar">
          <Link to="/boards/show" className="NBboardLink">Boards</Link>
          <Link to="/boards/show" className="NBboardHeader">Stakhanovites</Link>
          <div className="NBright">

            <button onClick={dropDownLink()} className="ProfileDD1">
              {props.currentUser.username.slice(0,1)}
            </button>

            <button onClick={dropDownLink()} className="ProfileDD2">
              {props.currentUser.username}
            </button>
          </div>
        </div>
        {props.children}
        <ProfileDropDownContainer/>
      </div>
);

export default withRouter(NavBar);
