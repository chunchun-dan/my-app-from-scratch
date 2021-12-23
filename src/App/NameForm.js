import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please type in text here'};

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
    console.log('Some text is added as ' + this.state.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          {'Name: '}
          <textarea
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
