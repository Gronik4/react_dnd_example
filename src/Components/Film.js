import React from 'react';
import image from '../img/poster.png'
import filmScheme from './sevices/filmScheme';

export default function Film({img, name, duration, id, onSelectFilm}) {
  
  function hendlerStart(e) {
    e.target.classList.add('taken');
    console.log('Взяли фильм с id= ' + e.target.id);
    const fantom = filmScheme(name, duration, id);
    document.querySelector('.conf-step__movies').append(fantom);
    e.dataTransfer.setDragImage(document.getElementById(`${e.target.id}ff`), 10,10);
    setTimeout(()=> fantom.remove(), 0);
  }
  function hendlerEnd(e) {
    e.target.classList.remove('taken');
  }
  
  return (
    <div
      className='conf-step__movie'
      id={id}
      draggable={true}
      onDragStart={(e)=> hendlerStart(e)}
      onDragEnd={(e)=> hendlerEnd(e)}
      >
      {img? <img className='conf-step__movie-poster' alt='poster' src={image}/>: null}
      <h3 className='conf-step__movie-title'>{name}</h3>
      <p className='conf-step__movie-duration'>{duration}минут</p>
    </div>
  );
}
