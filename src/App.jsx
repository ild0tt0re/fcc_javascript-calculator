import { useState /*, useEffect*/ } from 'react';
import './styles/App.scss';

const initialInputState = '0';
const initialExpressionState = '';

function App() {
  const [input, setInput] = useState(initialInputState);
  const [expression, setExpression] = useState(initialExpressionState);

  const handleClearClick = (e) => {
    setInput(initialInputState);
    setExpression(initialExpressionState);
  };

  const handleEqualsClick = (e) => {
    const operators = ['+', '-', 'x', '/'];
    const lastTwoCharsExpression = expression.slice(-2);
    const isLastCharOperator = operators.includes(lastTwoCharsExpression.slice(-1));
    let newExpression = '';

    if (isLastCharOperator) {
      let isPenultimateCharOperator = operators.includes(lastTwoCharsExpression.slice(0,1));
      let operatorsToRemove = isPenultimateCharOperator ? 2 : 1;

      newExpression = expression.slice(0, -operatorsToRemove);
    } else {
      newExpression = expression;
    }

    const normalizeExpression = newExpression.replace('x', '*');
    /* eslint-disable no-eval */
    const result = String(eval(normalizeExpression));

    setInput(result);
    setExpression(result);
  };

  const handleOperatorClick = (e) => {
    const currentInput = getTextInputFromEvent(e);
    const lastCharExpression = expression.slice(-1);
    const noRepeatOperators = ['+', 'x', '/'];

    setInput(currentInput);
    if (
      (noRepeatOperators.includes(lastCharExpression) &&
        currentInput !== '-') ||
      lastCharExpression === '-'
    ) {
      if (
        noRepeatOperators.includes(currentInput) &&
        lastCharExpression === '-'
      ) {
        const charBeforeMinusOperator = expression.slice(-2).slice(0, 1);
        noRepeatOperators.includes(charBeforeMinusOperator)
          ? setExpression(expression.slice(0, -2) + currentInput)
          : setExpression(expression + currentInput);
      } else {
        setExpression(expression.slice(0, -1) + currentInput);
      }
    } else {
      setExpression(expression + currentInput);
    }
  };

  const handleDecimalClick = (e) => {
    const currentInput = getTextInputFromEvent(e);
    if (!input.includes('.')) {
      setInput(input + currentInput);
      setExpression(expression + currentInput);
    }
  };

  const handleNumberClick = (e) => {
    let newInput = '0';
    const currentInput = getTextInputFromEvent(e);
    const lastCharExpression = expression.slice(-1);

    const specialChars = ['0', '+', '-', 'x', '/'];
    if (!specialChars.includes(input)) {
      newInput = input + currentInput;
      setInput(newInput);
      setExpression(expression + currentInput);

      //overwrite input 0
    } else {
      newInput = currentInput;
      setInput(currentInput);
      if (lastCharExpression !== '0') {
        setExpression(expression + newInput);
      }
    }
  };

  function getTextInputFromEvent(e) {
    return String(e.target.textContent);
  }

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
          <button id="decimal" onClick={handleDecimalClick}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
