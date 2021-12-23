import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    const text1 = <h1>Welcome Back</h1>;
    const text2 = <h1>Please Login</h1>;

    return (
      <div>
        {isLoggedIn ? text1 : text2}
      </div>
    )
  }
}

export default Greeting;
