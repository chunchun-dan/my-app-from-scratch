'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './App/Clock';

const domContainer = document.getElementById('root');

if (domContainer) {
  ReactDOM.render(
    <Clock />,
    domContainer
  );
}
