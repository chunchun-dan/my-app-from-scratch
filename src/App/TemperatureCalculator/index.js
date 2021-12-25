import React from 'react';
import Input from './Input';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
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
    const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

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
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default TemperatureCalculator;
