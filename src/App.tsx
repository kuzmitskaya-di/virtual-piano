import React from 'react';
import { notes } from './helpers'
import Octave from './componets/Octave'
import './App.css'

function App() {
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`audio/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  }
  return (
    <div className="App">
      <header className="header">
      <p className="title">Virtual Piano</p>
      </header>
      <div className='btn-container'>
        <button className='btn btn-notes'>Notes</button>
        <button className='btn btn-letters'>Letters</button>
      </div>
      <Octave notes={notes} clickHandler={handlerClick}/>
    </div>
  );
}

export default App;
