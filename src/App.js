import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import { useState } from 'react';

class Demo {
  add() {
  	var x=200;
  	var y=100;
    var c = x+y;
    return c;
  }
}

const n = () => {
  var a = 5;
  if(a === 5) {
    a = 10;
  }
  return a;
}

function App() {
  var obj = new Demo();
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'App-dark' : 'App'}>
      <div className="app-header">
        Welcome to React App
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
      <div className="app-sum">
        The sum of numbers = {obj.add()} <br />
        The value of a = {n()}
        <Welcome name="Bond" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
