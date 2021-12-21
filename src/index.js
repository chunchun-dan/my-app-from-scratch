'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const domContainer = document.getElementById('root');

if (domContainer) {
  ReactDOM.render(
    <App />,
    domContainer
  );
}
