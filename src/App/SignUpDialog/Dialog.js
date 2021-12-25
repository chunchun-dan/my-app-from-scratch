import React from 'react';
import FancyBorder from './FancyBorder';

const Dialog = (props) => {
  return(
    <FancyBorder color="blue">
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      {props.children}
      {props.comment}
    </FancyBorder>
  )
}

export default Dialog;
