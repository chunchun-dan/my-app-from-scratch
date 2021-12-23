import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComing: false,
      numberOfGuests: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.numberOfGuests} people ${this.state.numberOfGuests > 1 ? 'are' : 'is'} ${this.state.isComing ? '': 'not '}coming.`)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            {'Is coming: '}
            <input
              name="isComing"
              type="checkbox"
              value={this.state.isComing}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            {'Number of guests: '}
            <input
              name="numberOfGuests"
              type="text"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Reservation;
