import React from 'react';
import image from '../img/poster.png'
import SchemeFilm from './SchemeFilm';

export default function Film({img, name, duration, id, onSelectFilm}) {
  function hendler(e) {
    onSelectFilm(e.target.closest('.conf-step__movie').id);
  }
  function hendlerDragStart(e, id) {
    
    console.log('Взяли фильм с id= ' + e.target.id);
    //console.log('Взяли фильм= ' + e.target.innerHTML);
  }
  
  function hendlerDragOver(e) {
    e.preventDefault();
    //console.log('Летим над элементом = '+e.target.className);
  }

  return (
    <div
      className='conf-step__movie'
      id={id+'f'}
      draggable={true}
      onDragStart={(e)=> hendlerDragStart(e, id)}
      onDragOver={hendlerDragOver}
      >
      {img? <img className='conf-step__movie-poster' alt='poster' src={image}/>: null}
      <h3 className='conf-step__movie-title'>{name}</h3>
      <p className='conf-step__movie-duration'>{duration}минут</p>
    </div>
  );
}
