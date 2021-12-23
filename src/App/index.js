import React from 'react';
import Clock from './Clock';
import Form from './Form';
import LikeButton from './LikeButton';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import ListItems from './ListItems';
import NameForm from './NameForm';
import Reservation from './Reservation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
      ],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const id = new Date();
    this.setState({
      numbers: [{
        id: id.toLocaleTimeString(),
        value: 0,
      }, ...this.state.numbers]
    });
    console.log(id);
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
        <NameForm />
        <Reservation />
      </div>
    )
  }
}

export default App;
