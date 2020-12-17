import React, { useState, useContext } from 'react';
import NotesContext from './../context/notes-context';
import useMousePosition from './../hooks/useMousePosition';

const AddNoteForm = () => {

    const { dispatch } = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const position = useMousePosition();

    const changeTitle = (e) => {
        setTitle(e.target.value);
      };
    
      const changeBody = (e) => {
        setBody(e.target.value); 
      };

    const addNote = (e) => {
        e.preventDefault();
        dispatch( { type: 'ADD_NOTE', title, body } );
        setTitle('');
        setBody('');
    };

    // To use a fragment replace <div> with <> and </div> with </>
    return (
        <div>
            <p>Add note {position.x} - {position.y}</p>
            <form onSubmit={addNote}>
            <input value={title} onChange={changeTitle} />
            <textarea value={body} onChange={changeBody}></textarea>
            <button>Add note</button>
            </form>
        </div>
    )
};

export { AddNoteForm as default };