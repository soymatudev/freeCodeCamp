import React from 'react';
import '../styles/Form.css';
import ReactLogo from '../img/reactIcon.png'

function Form() {
  const nosub = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <form onSubmit={nosub} className='notes-form'>
          <input className='notes-form-text' type='text' placeholder='Escribe el titulo de la nota.' />
          <textarea className='notes-form-textarea' />
          <button className='notes-form-button' >Agregar Nota</button>
        </form>
      </div>
      <div>
        <img src={ReactLogo} alt="" className='notes-logo' />
      </div>
    </>
  );
}

export default Form;