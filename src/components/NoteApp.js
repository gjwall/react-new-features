import React, { useEffect, useReducer } from 'react';
import notesReducer from './../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {

    // Pass the reducer and the initial state
    const [notes, dispatch] = useReducer(notesReducer, [] );
    
    const removeNote = (title) => {
      dispatch( { type: 'REMOVE_NOTE', title } );
    };
  
    // Use this pattern if fetching data from a database. Use a promise or a callback!
    useEffect( () => {
      const notes = JSON.parse(localStorage.getItem('notes'));
      if( notes ) {
        dispatch( { type: 'POPULATE_NOTES', notes } );
      }
    }, [] );
  
    useEffect( () => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes] );
    
    return (
      <div>
        <h1>Notes</h1> 
        <NoteList notes={notes} removeNote={removeNote} /> 
        <AddNoteForm dispatch={dispatch} />
      </div>
    );
  
};

export { NoteApp as default };