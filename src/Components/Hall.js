import React from 'react'
import schemeFilmService from './sevices/schemeFilmService';
import SchemeFilm from './SchemeFilm';

export default function Hall({ name, id, schedule, datas }) {
  const tension = schedule[id];
 
  const datasFilms = schemeFilmService(tension, datas);
  const workingHours = datasFilms.reduce((summ, next)=> summ + next.dur + 10, 0);
  if(workingHours > 779) {
    alert(`Время демонстрации фильмов превышает продолжительность работы зала ${name}.`);
    tension.splice(-1, 1);
  }
  
  const renderFilm = tension.length?
    datasFilms.map((el, index)=> {
      return <SchemeFilm key={index} props={el}/>
    }):
    <p>В зале сансов пока не запланировано</p>;

   function hendlerDrop(e) {
    e.preventDefault();
    console.log(e.target.id);
   }

  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div className='conf-step__seances-timeline' id={id} onDragOver={(e)=> hendlerDrop(e)}>
        {renderFilm}
      </div>
    </div>
  )
}

