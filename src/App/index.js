import React from 'react';
import Clock from './Clock';
import Form from './Form';
import LikeButton from './LikeButton';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import ListItems from './ListItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.setState({
      numbers: [1, ...this.state.numbers]
    });
  }

  render() {
    return(
      <div>
        <Clock />
        <Form />
        <LikeButton />
        <Toggle />
        <LoginControl />
        <ListItems numbers={this.state.numbers} addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
