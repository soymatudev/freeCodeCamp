import React from 'react';
import './App.css';
import Form from './components/Form'; 
import Note from './components/Note';

function App() {
  return (
    <>
      <div className='notes-form-container'>
        <Form />
      </div>
      <div className='notes-container'>
        <Note title={"Soy un Titulo"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque vel unde nesciunt sed ex sequi soluta nemo expedita eveniet nostrum qui nam voluptas labore ullam, doloremque beatae officia praesentium!"} />
        <Note title={"Soy un titulo mas largo"} body={"Soy un cuerpo mas pequeno"} />
      </div>
    </>
  )
}

export default App
