'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './LikeButton';

const domContainer = document.getElementById('root');

if (domContainer) {
  ReactDOM.render(
    <LikeButton />,
    domContainer
  );
}
