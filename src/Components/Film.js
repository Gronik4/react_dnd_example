import React from 'react';
import image from '../img/poster.png'

export default function Film({img, name, duration, id}) {
  return (
    <div className='conf-step__movie' id={id}>
      {img? <img className='conf-step__movie-poster' alt='poster' src={image}/>: null}
      <h3 className='conf-step__movie-title'>{name}</h3>
      <p className='conf-step__movie-duration'>{duration}минут</p>
    </div>
  );
}