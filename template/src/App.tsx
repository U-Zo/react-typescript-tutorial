import React, { ReactElement } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';

function App(): ReactElement {
  return (
    <>
      <div className="App">
        <CounterContainer />
      </div>
    </>
  );
}

export default App;
