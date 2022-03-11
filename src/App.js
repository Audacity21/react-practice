import './App.css';
import Welcome from './Welcome';

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
  if(a == 5) {
    a = 10;
  }
  return a;
}

function App() {
  var obj = new Demo();
  return (
    <div className="App">
      <div className="app-header"> Welcome to React App</div>
      <div className="app-sum">
        The sum of numbers = {obj.add()} <br />
        The value of a = {n()}
        <Welcome name="Bond" />
      </div>
    </div>
  );
}

export default App;
