import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeBody = (e) => {
    setBody(e.target.value); 
  };

  const addNote = (e) => {
    e.preventDefault();
    setNotes( [
      ...notes,
      {
        title,
        body
      }
    ] );
    setTitle('');
    setBody('');
  };
  
  const removeNote = (title) => {
    setNotes( notes.filter( (note) => (note.title !== title) ));
  };
  
  return (
    <div>
      <h1>Notes</h1> 
      {
        notes.map( (note) => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>Remove note</button>
          </div>
        ))
      }
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={changeTitle} />
        <textarea value={body} onChange={changeBody}></textarea>
        <button>Add note</button>
      </form>
    </div>
  );

};

// const App = (props) => {

//   const [ count, setCount ] = useState(props.count);
//   const [ text, setText ] = useState('');

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   const inputChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <p>The current {text|| 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={() => setCount(count + 1)}>+1 again</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input value={text} onChange={inputChange} /> 
//     </div>
//   );
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
