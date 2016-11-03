import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", password: ""
    };
  this.handleSubmit = this.handleSubmit.bind(this);

  }

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

  navLink() {
    if (this.props.formType === "signin") {
      return <Link to= "/signup">Sign Up instead</Link>
    } else {
      return <Link to = "/signin">Sign In instead</Link>
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
      <div>
        <form onSubmit={this.handleSubmit}>
          Become a Stakhanovite!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          <div>
            <br/>
            <label> Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                />
            </label>
            <br/>
            <label> Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                />
            </label>
            <br/>
            <input type="submit" value = "Submit" />
          </div>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
