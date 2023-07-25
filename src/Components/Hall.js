import React from 'react'
import schemeFilmService from './sevices/schemeFilmService';
import SchemeFilm from './SchemeFilm';

export default function Hall({ name, id, schedule, datas }) {
  const tension = schedule[id];
 
  const datasFilms = schemeFilmService(tension, datas);
  const workingHours = datasFilms.reduce((summ, next)=> summ + next.dur + 10, 0);
  if(workingHours > 779) {
    alert(`Нельзя добавить этот фильм в сетку этого зала!\n
          Так как время демонстрации фильмов превысит продолжительность работы зала ${name}.`);
    tension.splice(-1, 1);
  }
  
  const renderFilm = tension.length?
    datasFilms.map((el, index)=> {
      return <SchemeFilm key={index} props={el}/>
    }):
    <p>В зале сансов пока не запланировано</p>;

  function hendlerDragOver(e) {
    e.preventDefault();
    e.target.style = 'background: #9adeed';
    //console.log('Летим над элементом с id= '+id);
console.log('Летим над элементом = '+e.target.innerHTML);
  }

  function hendlerDrop(e, id) {
    e.target.style = 'background: ';
   // console.log('бросили над элементом с классом= '+e.target.className);
    console.log('бросили над элементом с id= '+id);
  }

  function hendlerDragLeave(e) {
    e.preventDefault();
    e.target.style = 'background: ';
    console.log('Вылетели из элемента с id= '+id);
  }

  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div
        className='conf-step__seances-timeline'
        id={id}
        onDragOver={(e)=> hendlerDragOver(e)}
        onDrop={(e)=> hendlerDrop(e, id)}
        onDragLeave={(e)=> hendlerDragLeave(e)}
      >
        {renderFilm}
      </div>
    </div>
  )
}

