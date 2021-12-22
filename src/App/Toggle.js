import React from 'react';

function ShowText(props) {
  if(!props.isToggleOn) {
    return null
  }

  return(
    <div>
      Toggle is on
    </div>
  )
}

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
      <div>
        <ShowText isToggleOn={this.state.isToggleOn}/>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOn? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

export default Toggle;
