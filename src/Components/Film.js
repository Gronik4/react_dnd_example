import React from 'react';
import image from '../img/poster.png'
import SchemeFilm from './SchemeFilm';

export default function Film({img, name, duration, id, onSelectFilm}) {
  
  function hendlerStart(e) {
    e.target.classList.add('taken');
    console.log('Взяли фильм с id= ' + e.target.id);
    //console.log('Взяли фильм= ' + e.target.innerHTML);
  }
  function hendlerEnd(e) {
    e.target.classList.remove('taken');
  }
  
  return (
    <div
      className='conf-step__movie'
      id={id+'f'}
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
