import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    return (
      <h1>{isLoggedIn ? 'Welcome Back' : 'Please Login'}</h1>
    )
  }
}

export default Greeting;
