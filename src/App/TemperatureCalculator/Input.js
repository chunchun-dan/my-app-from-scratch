import React from 'react';

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return(
      <fieldset>
        <legend>{`Enter the ${scales[this.props.scale]} temperature:`}</legend>
        <input
          value={this.props.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

export default Input;
