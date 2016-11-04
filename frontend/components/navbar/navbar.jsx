import React from 'react';
import { Link, withRouter } from 'react-router';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="NavBar">
        Stakhanovites
        <button onClick={this.props.signout}>Sign Out</button>
        {this.props.children}
      </div>
    );
  };
};

export default withRouter(NavBar);
