import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {

  const [ count, setCount ] = useState(props.count);
  const [ text, setText ] = useState('');

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
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(
  <React.StrictMode>
    <App count={0} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
