import React, { useState } from 'react';
import './App.css';

const StackApp = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const pushToStack = () => {
    if (inputValue.trim() !== '') {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    }
  };

  return (
    <div className="stack-app">
      <h1>Stack App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
      <div className="stack">
        <h2>Stack:</h2>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackApp;
