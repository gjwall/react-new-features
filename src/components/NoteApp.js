import React, { useEffect, useReducer } from 'react';
import notesReducer from './../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from './../context/notes-context';

const NoteApp = () => {

    // Pass the reducer and the initial state
    const [notes, dispatch] = useReducer(notesReducer, [] );
  
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
      <NotesContext.Provider value={{ notes, dispatch }}>
        <h1>Notes</h1> 
        <NoteList /> 
        <AddNoteForm />
      </NotesContext.Provider>
    );
  
};

export { NoteApp as default };