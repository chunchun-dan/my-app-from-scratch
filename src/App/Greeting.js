import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.isLoggedIn) {
      return (
        <h1>
          Welcome back
        </h1>
      );
    }
    return (
      <h1>
        Please sign up
      </h1>
    )
  }
}

export default Greeting;
