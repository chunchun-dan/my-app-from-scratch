import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Please type in text here',
      selectValue: 'coconut',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('Some text is added as ' + this.state.textValue);
    console.log('Your favorite flavor is ' + this.state.selectValue);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          {'Name: '}
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
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;
