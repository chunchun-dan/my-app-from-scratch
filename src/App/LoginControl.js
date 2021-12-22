import React from 'react';
import Greeting from './Greeting';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({isLoggedIn: true});
  }

  handleLogout() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = (
        <button onClick={this.handleLogout}>
          Logout
        </button>
      );
    } else {
      button = (
        <button onClick={this.handleLogin}>
          Login
        </button>
      );
    }

    return(
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginControl;
