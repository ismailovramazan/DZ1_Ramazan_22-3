import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    setOperator(value);
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === '+') {
      setResult(n1 + n2);
    } else if (operator === '-') {
      setResult(n1 - n2);
    } else if (operator === '*') {
      setResult(n1 * n2);
    } else if (operator === '/') {
      setResult(n1 / n2);
    } else {
      setResult('Invalid Operator');
    }
  };

  return (
    <div>
      <input type="number" name="num1" value={num1} onChange={handleInput} />
      <select name="operator" value={operator} onChange={handleOperator}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" name="num2" value={num2} onChange={handleInput} />
      <button onClick={handleCalculate}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
