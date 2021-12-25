import React from 'react';
import Input from './Input';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class TemperatureCalculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheit = this.handleFahrenheit.bind(this);
  }

  handleCelsiusChange(value) {
    this.setState({
      temperature: value,
      scale: 'c',
    });
  }

  handleFahrenheit(value) {
    this.setState({
      temperature: value,
      scale: 'f',
    })
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'c' ? temperature : toCelsius(temperature);
    const fahrenheit = scale === 'f' ? temperature : toFahrenheit(temperature);

    return(
      <div>
        <Input
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
          scale="c"
        />
        <Input
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheit}
          scale="f"
        />
        <BoilingVerdict celsius={celsius}/>
      </div>
    )
  }
}

export default TemperatureCalculator;
