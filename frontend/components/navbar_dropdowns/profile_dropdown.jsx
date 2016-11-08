import React from 'react';
import {Link, withRouter} from 'react-router';


const ProfileDropDown = (props) => (
  <div className="ProfileDropDown">
    <h2>{props.currentUser.username}</h2>
    <button onClick={props.signout} className="PDDSignOut">
      Sign Out
    </button>
  </div>
)

export default withRouter(ProfileDropDown);
