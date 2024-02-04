import React from 'react';
import '../styles/Note.css';

function Note({ title, body }) {
  return (
    <div className='note-container'>
      <h1 className='note-title'>
        {title}
      </h1>
      <p className='note-body'>
        {body}
      </p>
    </div>
  );
}

export default Note;