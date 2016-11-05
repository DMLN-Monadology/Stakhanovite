import React from 'react';
import { Link, withRouter } from 'react-router';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="NavBar">
          <Link to="/boards" className="NBboardLink">Boards</Link>
            <Link to="/boards" className="NBboardHeader">Stakhanovites</Link>
          <button onClick={this.props.signout} className="NBSignOut">Sign Out</button>
        </div>
        {this.props.children}
      </div>
    );
  };
};

export default withRouter(NavBar);
