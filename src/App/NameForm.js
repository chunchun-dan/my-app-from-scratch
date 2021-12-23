import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textValue: 'Please type in text here',
      selectValue: 'coconut',
      multiValue: ['a', 'b']
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleTextChange(e) {
    this.setState({
      textValue: e.target.value,
    });
  }

  handleSelectChange(e) {
    this.setState({
      selectValue: e.target.value,
    });
  }

  handleMultiChange(e) {
    if (this.state.multiValue.indexOf(e.target.value) > -1) {
      const index = this.state.multiValue.findIndex((v) => v === e.target.value)
      let multi = this.state.multiValue;
      multi.splice(index, 1);
      this.setState({
        multiValue: multi
      })
    }else{
      this.setState({
        multiValue: [...this.state.multiValue, e.target.value]
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The input name is ' + this.state.inputValue);
    console.log('Some text is added as ' + this.state.textValue);
    console.log('Your favorite flavor is ' + this.state.selectValue);
    console.log('Your multiple choice is ' + this.state.multiValue);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          {'Name: '}
          <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
        </div>
        <div>
          {'Text: '}
          <textarea
            value={this.state.textValue}
            onChange={this.handleTextChange}
          />
        </div>
        <div>
          {'Select your favorite flavor: '}
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="coconut">Coconut</option>
            <option value="Mango">Mango</option>
            <option value="Lime">Lime</option>
          </select>
        </div>
        <div>
          <select multiple={true} value={this.state.multiValue} onChange={this.handleMultiChange}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;
