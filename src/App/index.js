import React from 'react';
import Clock from './Clock';
import Form from './Form';
import LikeButton from './LikeButton';
import Toggle from './Toggle';
import LoginControl from './LoginControl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Clock />
        <Form />
        <LikeButton />
        <Toggle />
        <LoginControl />
      </div>
    )
  }
}

export default App;
