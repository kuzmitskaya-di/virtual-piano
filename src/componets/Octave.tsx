import React from 'react';
import { NoteType } from '../helpers'
import Note from './Note'
import './Octave.css'

type Props = {
  notes: NoteType[],
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Octave: React.FC<Props> = ({notes, clickHandler}) => (
  <div className='wrapper'>
    <div className="octave">
      {notes.map((element: NoteType) => (
        <Note
          key={element.note}
          color={element.color}
          note={element.note}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  </div>
)


export default Octave;