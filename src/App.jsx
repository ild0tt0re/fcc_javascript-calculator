// import { useEffect, useState } from 'react';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div id="calculator">
        <div id="display">
          <div className="input">
            0
          </div>
          <div className="expression">
            5+4=9
          </div>
        </div>
        <div className="keyboard">
          <button id="clear">AC</button>
          <button id="divide">/</button>
          <button id="multiply">x</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="subtract">-</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="add">+</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="equals">=</button>
          <button id="zero">0</button>
          <button id="decimal">,</button>
        </div>
      </div>
    </div>
  );
}

export default App;
