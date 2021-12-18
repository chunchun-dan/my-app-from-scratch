import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [sideMenu, setSideMenu] = useState('home');

  return(
    <h1>
      Home
    </h1>
  );
}

export default App;
