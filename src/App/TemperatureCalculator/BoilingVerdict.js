import React from 'react';

class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      {this.props.celsius >= 100
        ? <h2>{'The water is boiled'}</h2>
        : <h2>{'The water is not boiled'}</h2>
      }
      </div>
    );
  }
}

export default BoilingVerdict;
