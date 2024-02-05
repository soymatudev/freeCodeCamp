import React, { useState } from 'react';
import '../styles/NoteList.css'
import Form from './Form';
import Note from './Note';

function NoteList() {

  const [notes, setNotes] = useState([]);

  /* const addNote = (note) => {
    if (note.body.trim()) {
      note.body = note.body.trim();

      const bodyFetchAdd = `variablekey=addNote&id=${note.id}&title=${note.title}&body=${note.body}`;
      dataFetch(bodyFetchAdd);

      const bodyFetchView = `variablekey=${'viewNotes'}`;
      console.log(dataFetch(bodyFetchView));
      //const dataNotes = dataFetch(bodyFetchView);

      const updateNotes = [note, ...notes];
      setNotes(updateNotes);
    }
  } */

  const addNote = async (note) => {
  if (note.body.trim()) {
    note.body = note.body.trim();
    const bodyFetchView = `variablekey=${"viewNotes"}`;
    try {
      const dataNotes = await dataFetch(bodyFetchView);
      console.log(dataNotes);
      const updateNotes = [note, ...notes];
      setNotes(updateNotes);
    } catch (error) {
      console.error("Error al obtener notas:", error);
    }
  }
};

  const deleteNote = (id) => {
    const updateNotes = notes.filter(note => note.id !== id);
    setNotes(updateNotes);
  }

  return (
    <>
      <div className='notes-form-container'>
        <Form onSubmit={addNote} />
      </div>
      <div className='notes-container'>
        {/* <Note title={'Soy un Titulo'} body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque vel unde nesciunt sed ex sequi soluta nemo expedita eveniet nostrum qui nam voluptas labore ullam, doloremque beatae officia praesentium!'} />
        <Note title={'Soy un titulo mas largo'} body={'Soy un cuerpo mas pequeno'} /> */}
        {
          notes.map((note) => 
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              deleteNote={deleteNote}
            />
          )
        }
      </div>
    </>
  );
}

export default NoteList;