import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import ProfileDropDownContainer from '../navbar_dropdowns/profile_dropdown_container';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {dropdown: "closed"};
  }

  toggleDropdown() {
    return (event) => {
      event.preventDefault();
      this.state.dropdown === "closed" ? this.setState({ dropdown: "open"}) : this.setState({ dropdown: "closed"})
    }
  }

  render() {
    let dropDown;
    if (this.state.dropdown === "open") {
      dropDown = <ProfileDropDownContainer/>
    };
        return (
        <div>
          <div className="NavBar">
            <Link to="/boards/show" className="NBboardLink">Boards</Link>
            <Link to="/boards/show" className="NBboardHeader">Stakhanovites</Link>
            <div className="NBright">

              <button onClick={this.toggleDropdown()} className="ProfileDD1">
                {this.props.currentUser.username.slice(0,1)}
              </button>

              <button onClick={this.toggleDropdown()} className="ProfileDD2">
                {this.props.currentUser.username}
              </button>

            </div>
          </div>
          {this.props.children}
          {dropDown}
        </div>)
  };

}

export default NavBar;
