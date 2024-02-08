import React, { useState } from 'react';
import '../styles/Form.css';
import { v4 as uuidv4} from 'uuid'

function Form(props) {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const getTitle = (titleText) => {
    //console.log(titleText.target.value);
    setTitle(titleText.target.value);
  }

  const getbody = (bodyText) => {
    //console.log(bodyText.target.value);
    setBody(bodyText.target.value);
  }

  const sendNote = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      title: title,
      body: body,
    }

    props.onSubmit(newNote);
  }

  return (
    <>
      <div>
        <form onSubmit={sendNote} className='notes-form'>
          <input
            className='notes-form-text'
            type='text'
            placeholder='Escribe el titulo de la nota.'
            onChange={getTitle}
          />
          <textarea
            className='notes-form-textarea'
            onChange={getbody}
          />
          <button className='notes-form-button' >Agregar Nota</button>
        </form>
      </div>
      <div>
        <img src={'./reactIcon.png'} alt="" className='notes-logo' />
      </div>
    </>
  );
}

export default Form;