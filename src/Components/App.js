import React from 'react';
import ChildComponent from './childComponent';

import './main.css';

function App() {

  let red = 'red';
  let green = 'green';

  const style1 = {
    color : red,
  }

  style1.color = green;


  return (
    <>
      <h1 style={style1}>
        Hello World!
      </h1>
      <h2>
        Hello World!
      </h2>
      <ChildComponent />
      <button >change color</button>
    </>
  );
}

export default App;
