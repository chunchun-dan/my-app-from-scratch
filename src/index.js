'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {},
      'Hello World!'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(
  e(App),
  domContainer
);
