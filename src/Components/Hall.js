import React from 'react'
import schemeFilmService from './sevices/schemeFilmService';
import SchemeFilm from './SchemeFilm';

export default function Hall({ name, id, schedule, datas }) {
  //console.log(schedule[id-1][id]);
  //console.log(`id= ${id-1}`);
  const tension = schedule[id];
  
  console.log(tension);
  const datasFilms = schemeFilmService(tension, datas);
  //console.log(datasFilms);
  //console.log(`numHall = ${id}, tension= ${tension}`);
  //console.log(tension);
  //console.log(datasFilms);
  //console.log(Array.isArray(datasFilms));
  const renderFilm = tension.length?
    datasFilms.map((el)=> {return <SchemeFilm key={el.id} props={el}/>}):
    <p>В зале сансов пока не запланировано</p>;

  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div className='conf-step__seances-timeline'>
        {renderFilm}
      </div>
    </div>
  )
}

