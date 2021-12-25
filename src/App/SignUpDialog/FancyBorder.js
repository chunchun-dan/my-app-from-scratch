import React from 'react';

const FancyBorder = (props) => {
  const style = {
    border: `2px solid ${props.color}`,
    padding: '0 24px 24px 24px'
  }

  return (
    <div className={`FancyBorder FancyBorder-${props.color}`} style={style}>
      {props.children}
    </div>
  );
}

export default FancyBorder;
