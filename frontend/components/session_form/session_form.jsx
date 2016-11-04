import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", password: ""
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.switchForms = this.switchForms.bind(this);
  this.workingTitle = this.workingTitle.bind(this);
  }

  workingTitle() {
    if (this.props.formType === "signin") {
      return "Sign In"
    }else{
      return "Sign Up"
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state)
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.currentTarget.value})
    };
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn){
      this.props.router.push("/boards");  //write in boards!
    }
  }

  switchForms(event) {
    event.preventDefault();
    this.props.clearErrors();
    if (this.props.formType === "signin") {
      this.props.router.push("/signup")
    } else {
      this.props.router.push("/signin")
    }
  };

  navLinks() {
    if (this.props.formType === "signin") {
      return <a onClick={this.switchForms}>Create a Stakhanovites account.</a>
    }else{
      return <a onClick={this.switchForms}>Sign In</a>
    }
  };

  navLinksMessage() {
    if (this.props.formType === "signin") {
      return <p>Don't have an account?</p>
    }else{
      return <p>Already have an account?</p>
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="SessionForm">
        <header>
          {this.workingTitle()} to Stakhanovites
        </header>
        <form onSubmit={this.handleSubmit}>
            <label className="FormElement"> Username
              <input
                placeholder="e.g., alexey@shockworker.xyz"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                />
            </label>

            <label className="FormElement"> Password
              <input
                placeholder="e.g., ************"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                />
            </label>

            <input type="submit" value ={this.workingTitle()} className="submitButton" />
        </form>
        {this.renderErrors()}
        <div className="FormSwapGroup">
          {this.navLinksMessage()}
          {this.navLinks()} 
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
