import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {

  let [notes, setNotes] = useState([]);
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

  // Use this pattern if fetching data from a database. Use a promise or a callback!
  useEffect( () => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    if( notesData) {
      setNotes(notesData);
    }
  }, [] );

  useEffect( () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes] );
  
  return (
    <div>
      <h1>Notes</h1> 
      {
        notes.map( (note) => (
          <Note key={note.title} note={note} removeNote={removeNote} />
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

const Note = ( {note, removeNote}) => {

  useEffect( () => {
    console.log('Setting up effect'); 

    return () => {
      console.log('Cleaning up effect');
    }
  }, [] );

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>Remove note</button>
    </div>
  )
};

// const App = (props) => {

//   const [ count, setCount ] = useState(props.count);
//   const [ text, setText ] = useState('');

//   // Doing the below causes this to run once 
//   useEffect( () => {
//     console.log('This should only run once!');
//   }, [] );

//   // Only run the following when count changes, prevent too much running
//   useEffect( () => {
//     console.log('in use effect');
//     document.title = count; 
//   }, [count] );

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
// };

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
