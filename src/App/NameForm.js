import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('A new name is submitted as ' + this.state.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          {'Name: '}
          <input
            type="text"
            name="nameInput"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;
