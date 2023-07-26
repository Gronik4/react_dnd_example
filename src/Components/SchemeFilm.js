import React from 'react'

export default function SchemeFilm({props}) {
  const { id, name, dur, posStart, timeStart, timeEnd } = props;
  const wt = 29; // Ширина записи времени чч:мм

  function hendlerStartSF(e) {
    e.target.classList.add('taken');
    //console.log(`Взяли схему фильма с id= `+e.target.className);
    
  }
  function hendlerDragEnd(e) {
    e.target.classList.remove('taken')
    //console.log('Отпустили элемент = '+e.target.className);
  }

  return (
    <div
      draggable={true}
      onDragStart={(e)=> hendlerStartSF(e)}
      onDragEnd={(e)=> hendlerDragEnd(e)}
      className='conf-step__seances-movie'
      id={id+'fs'} 
      style={{
        'width': dur,
        'backgroundColor': 'rgb(133, 255, 137)',
        'left': posStart,
        'padding': 0,
        'fontSize': '0.7rem',
        'cursor': 'move'
        }}
      >
      <p className='conf-step__seances-movie-title'>{name}</p>
      <p className='conf-step__seances-movie-start'>{timeStart}</p>
      <p className='conf-step__seances-movie-start' style={{'left': `${dur-wt}px`}}>{timeEnd}</p>
      <div className='conf-step__seances-movie-after' style={{'left': `${dur-1}px`}}></div>
      <div className='cleaner-time' style={{'left': `${dur-1}px`}}></div>
    </div>
  )
}
