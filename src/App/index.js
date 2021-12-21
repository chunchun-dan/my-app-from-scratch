import React from 'react';
import Clock from './Clock';
import Form from './Form';
import LikeButton from './LikeButton';
import Toggle from './Toggle';

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
      </div>
    )
  }
}

export default App;
