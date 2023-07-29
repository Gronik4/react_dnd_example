import React from 'react'
import schemeFilmService from './sevices/schemeFilmService'

export default function LoadingMovies({tension, datas, onDelFilm}) {

  const wt = 29; // Ширина записи времени чч:мм
  const listFilms = schemeFilmService(tension, datas);

  if(tension.length !== 0) {
    const workingHours = listFilms.reduce((summ, next)=> summ + next.dur + 10, 0);
    if(workingHours > 779) {
      alert(`Нельзя добавить этот фильм в сетку этого зала!\n
            Так как время демонстрации фильмов превысит продолжительность работы зала.`);
      tension.splice(-1, 1);
    }
  }
  
  
  function hendlerStartSF(e) {
    console.log('Взяли фильм= '+e.target.id);
    e.target.classList.add('taken');
    
  }

  function hendlerEndSF(e) {
    onDelFilm(e);
    e.target.classList.remove('taken');
    
  }

  return (
    <>
     {!tension.length? listFilms:
      listFilms.map((el, index)=> {
        const { id, name, dur, posStart, timeStart, timeEnd } = el;
        return(
          <div key={index}
            draggable={true}
            onDragStart={(e)=> hendlerStartSF(e)}
            onDragEnd={(e)=> hendlerEndSF(e)}
            className='conf-step__seances-movie'
            id={id} 
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
      })
     } 
    </>
  )
}