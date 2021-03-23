import React from "react";
import './Note.css'

type Props = {
  color: string,
  note: string,
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Note: React.FC<Props> = ({color, note, clickHandler}) =>
  color === 'white' ? <button className='btn-white' value={note} onClick={clickHandler}/>
    : <button className='btn-black' value={note} onClick={clickHandler}/>;

export default Note;