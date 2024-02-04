import React from 'react';
import '../styles/Note.css';
import { TiDeleteOutline } from "react-icons/ti";

function Note({ id, title, body, deleteNote, }) {
  return (
    <div className='note-container'>
      <div className='note-title-container'>
        <h1 className='note-title'>{title}</h1>
        <TiDeleteOutline onClick={() => deleteNote(id)} className='note-icon-delete' />
      </div>
      <p className='note-body'>{body}</p>
    </div>
  );
}

export default Note;