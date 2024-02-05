import React, { useState } from 'react';
import '../styles/NoteList.css'
import Form from './Form';
import Note from './Note';

function NoteList() {

  const [notes, setNotes] = useState([]);

  const addNote = async (note) => {
  if (note.body.trim()) {
    note.body = note.body.trim();

    const bodyFetchAdd = `variablekey=${"addNote"}&id=${note.id}&title=${note.title}&body=${note.body}`;
    const bodyFetchView = `variablekey=${"viewNotes"}`;
    
    try {
      await dataFetch(bodyFetchAdd);

      const dataNotes = await dataFetch(bodyFetchView);
      //console.log(dataNotes);
      const updateNotes = [...dataNotes];
      setNotes(updateNotes);

    } catch (error) {
      console.error("Error al obtener notas:", error);
    }
  }
  };
  
  const loadNote = async () => {
    const bodyFetchView = `variablekey=${"viewNotes"}`;
    try {
      const dataNotes = await dataFetch(bodyFetchView);
      const updateNotes = [...dataNotes];
      setNotes(updateNotes);
    } catch (error) {
      console.error("Error al obtener notas:", error);
    }
  };

  const deleteNote = async (id) => {
    const bodyFetchDelete = `variablekey=${"deleteNote"}&id=${id}`;
    try {
      await dataFetch(bodyFetchDelete);
      const dataNotes = loadNote();
      const updateNotes = [...dataNotes];
      setNotes(updateNotes);
    } catch (error) {
      console.error("Error al obtener notas:", error);
    }/* 
    const updateNotes = notes.filter(note => note.id !== id);
    setNotes(updateNotes); */
  }

  return (
    <>
      <div onLoad={loadNote} className='notes-form-container'>
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