import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AnotherModule = () => {
  const [clicked, setClicked] = useState(false);

  return(
    <>
      <button onClick={() => setClicked(!clicked)}>
        Click
      </button>
      {clicked && (<div>Show</div>)}
    </>
  )
};

const domContainer = document.getElementById('another_module');

if (domContainer) {
  ReactDOM.render(
    <AnotherModule />,
    domContainer
  );
}
