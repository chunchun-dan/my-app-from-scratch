import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    //if this is not bind, this will be undefined when the function is actually called
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Toggle;
