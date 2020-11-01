import { useState /*, useEffect*/ } from 'react';
import './styles/App.scss';

const initialInputState = 0;
const initialExpressionState = '';

function App() {
  const [input, setInput] = useState(initialInputState);
  const [expression, setExpression] = useState(initialExpressionState);

  const handleClearClick = (e) => {
    setInput(initialInputState);
    setExpression(initialExpressionState);
  };

  const handleEqualsClick = (e) => {
    const parsedExpression = expression.replace('x', '*');
    const result = eval(parsedExpression);
    setInput(result);
  };

  const handleOperatorClick = (e) => {
    const currentInput = String(e.target.textContent);

    setInput(currentInput);
    setExpression(expression + currentInput);
  };

  const handleNumberClick = (e) => {
    let newInput = 0;
    const currentInput = String(e.target.textContent);

    const specialChars = [0, '+', '-', 'x', '/'];
    if (!specialChars.includes(input)) {
      newInput = input + currentInput;
      setInput(newInput);
      setExpression(expression + currentInput);

      //overwrite input 0
    } else {
      newInput = currentInput;
      setInput(currentInput);
      setExpression(expression + newInput);
    }
  };

  return (
    <div className="App">
      <div id="calculator">
        <div className="cscreen">
          <div id="display" className="input">
            {input}
          </div>
          <div className="expression">{expression}</div>
        </div>
        <div className="keyboard">
          <button id="clear" onClick={handleClearClick}>
            AC
          </button>
          <button
            id="divide"
            className="operator-key"
            onClick={handleOperatorClick}
          >
            /
          </button>
          <button
            id="multiply"
            className="operator-key"
            onClick={handleOperatorClick}
          >
            x
          </button>
          <button id="seven" onClick={handleNumberClick}>
            7
          </button>
          <button id="eight" onClick={handleNumberClick}>
            8
          </button>
          <button id="nine" onClick={handleNumberClick}>
            9
          </button>
          <button
            id="subtract"
            className="operator-key"
            onClick={handleOperatorClick}
          >
            -
          </button>
          <button id="four" onClick={handleNumberClick}>
            4
          </button>
          <button id="five" onClick={handleNumberClick}>
            5
          </button>
          <button id="six" onClick={handleNumberClick}>
            6
          </button>
          <button
            id="add"
            className="operator-key"
            onClick={handleOperatorClick}
          >
            +
          </button>
          <button id="one" onClick={handleNumberClick}>
            1
          </button>
          <button id="two" onClick={handleNumberClick}>
            2
          </button>
          <button id="three" onClick={handleNumberClick}>
            3
          </button>
          <button id="equals" onClick={handleEqualsClick}>
            =
          </button>
          <button id="zero" onClick={handleNumberClick}>
            0
          </button>
          <button id="decimal">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
