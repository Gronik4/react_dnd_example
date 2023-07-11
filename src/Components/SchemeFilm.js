import React from 'react'

export default function SchemeFilm({ id, name, duration, position, time }) {
  const posEnd = duration -15;
  const horth = Math.round(duration/60);
  const minut = duration % 60;
  const timeEnd = `${10 + horth}:${minut}`;
  console.log(posEnd);
  return (
    <div className='conf-step__seances-movie' id={id} 
      style={{
        'width': duration,
        'backgroundColor': 'rgb(133, 255, 137)',
        'left':0,
        'padding': 0,
        'fontSize': '0.7rem'
        }}>
      <p className='conf-step__seances-movie-title'>{name}</p>
      <p className='conf-step__seances-movie-start'>10:00</p>
      <p className='conf-step__seances-movie-start'
        style={{'left': `${posEnd}px`}}>{timeEnd}
      </p>
    </div>
  )
}
