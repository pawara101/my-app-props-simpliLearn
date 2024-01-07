import logo from './logo.svg';
import './App.css';
import './Classprops.js';
import Classprops from './Classprops.js';
import Functionprops from './Functionprops.js';

function App() {
  return (
    <div className="App">
      <Classprops name="Leraner 1"><p>child Component</p>
      </Classprops>
      <Classprops name="James">
        <button type="button">Click</button>
      </Classprops>

      <Functionprops name="Learner4"></Functionprops>
    </div>
  );
}

export default App;
