import React from 'react';
import './App.css';
import Greetings from './components/Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <div className="App">
      <Greetings name="Hello" onClick={onClick} />
      <Greetings name="World" mark="@" optional="second" onClick={onClick} />
    </div>
  );
};

export default App;
