import React, { useState, useEffect } from 'react';

const App = (props) => {

  const [ count, setCount ] = useState(props.count);
  const [ text, setText ] = useState('');

  // Doing the below causes this to run once 
  useEffect( () => {
    console.log('This should only run once!');
  }, [] );

  // Only run the following when count changes, prevent too much running
  useEffect( () => {
    console.log('in use effect');
    document.title = count; 
  }, [count] );

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const inputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>The current {text|| 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(count + 1)}>+1 again</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={text} onChange={inputChange} /> 
    </div>
  );
};

App.defaultProps = {
  count: 0
}

export { App as default };