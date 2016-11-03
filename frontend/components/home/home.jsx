import React from 'react';
import { Link, withRouter } from 'react-router';
import guestAccounts from './guest_accounts';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.guestAccounts = guestAccounts()

    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }

  handleGuestSubmit(event){
    event.preventDefault();
    let randomAccount = Math.floor(Math.random() * (30 - 0 + 1))
    this.props.guestSignIn({username: this.guestAccounts[randomAccount], password:"Guest123"});
    this.props.router.push("/boards");
  }


  SessionLinks() {
    return (
    <ul className="signin_signup">
      <li className="signinButton">
        <Link to= "/signin">Sign In</Link>
      </li>
      <li className="signupButton">
        <Link to= "/signup">Sign Up</Link>
      </li>
    </ul>
  )}

 WelcomeMessage() {
   return (
    <div className="homeBody">
      <h2>
        Stakhanovites lets you work more collaboratively and get more done.
      </h2>
      <p>
        Stakhanovites's boards, lists, and cards enable you to organize and prioritize
        projects in a fun, flexible, and rewarding way.
      </p>
      <button onClick={this.handleGuestSubmit} className="GuestButton">Guest</button>
    </div>
    );
  }


  render() {
    return (
    <div className="homePage">
      <div className="homeHeader">
        <div className="logo">
          Stakhanovites
        </div>
        {this.SessionLinks()}
      </div>
      {this.WelcomeMessage()}
    </div>
  );}

}

export default withRouter(Home);
