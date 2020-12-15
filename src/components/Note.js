import React from 'react';

const Note = ( {note, removeNote} ) => {
  
    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => removeNote(note.title)}>Remove note</button>
      </div>
    )
};

export { Note as default };