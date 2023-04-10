import React, { useState } from 'react';

function CalculatorComponent() {
  const [inputValue, setInputValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (inputValue === '0') {
      setInputValue(num.toString());
    } else {
      setInputValue(inputValue + num.toString());
    }
  };

  const handleOperatorClick = (op) => {
    if (prevValue === null) {
      setPrevValue(parseFloat(inputValue));
      setInputValue('0');
      setOperator(op);
    } else {
      performCalculation();
      setOperator(op);
    }
  };

  const performCalculation = () => {
    const currentValue = parseFloat(inputValue);
    let result;

    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        return;
    }

    setInputValue(result.toString());
    setPrevValue(result);
  };

  const handleEqualsClick = () => {
    performCalculation();
    setOperator(null);
  };

  const handleClearClick = () => {
    setInputValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <div>
      <input type="text" value={inputValue} disabled />
      <br />
      <button onClick={() => handleNumberClick(1)}>1</button>
      <button onClick={() => handleNumberClick(2)}>2</button>
      <button onClick={() => handleNumberClick(3)}>3</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <br />
      <button onClick={() => handleNumberClick(4)}>4</button>
      <button onClick={() => handleNumberClick(5)}>5</button>
      <button onClick={() => handleNumberClick(6)}>6</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <br />
      <button onClick={() => handleNumberClick(7)}>7</button>
      <button onClick={() => handleNumberClick(8)}>8</button>
      <button onClick={() => handleNumberClick(9)}>9</button>
      <button onClick={() => handleOperatorClick('')}></button>
      <br />
      <button onClick={() => handleNumberClick(0)}>0</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={handleEqualsClick}>=</button>
      <button onClick={handleClearClick}>C</button>
    </div>
  );
}

export default CalculatorComponent