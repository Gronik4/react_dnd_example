import React, { useState } from 'react';
import LoadingMovies from './LoadingMovies';

export default function Hall({ name, id, schedule, datas }) {
  const [tension, setTension] = useState(schedule[id+'hg']);
 
  /*const datasFilms = schemeFilmService(tension, datas);
  const workingHours = datasFilms.reduce((summ, next)=> summ + next.dur + 10, 0);
  if(workingHours > 779) {
    alert(`Нельзя добавить этот фильм в сетку этого зала!\n
          Так как время демонстрации фильмов превысит продолжительность работы зала ${name}.`);
    tension.splice(-1, 1);
  }*/
  function hendlerTension(idTaken) {
    const arr = tension.slice();
    const index = arr.indexOf(idTaken);
    arr.splice(index, 1);
    setTension(arr);
  }
  function hendlerDragOver(evn) {
    evn.preventDefault(); 
    console.log('Летим над элементом = '+ evn.target.className);
    const idTaken = document.querySelector('.taken').id;
    let idH = '';
    if(evn.target.className === 'conf-step__seances-timeline') {
      evn.target.style = 'background: #9adeed';
      idH = evn.target.id;
      //schedule[idH].push(Number(idTaken[0]));
      //console.log('Летим над элементом = '+idH + ' несем фильм с id= '+idTaken);
      //console.log(tension);
    }
    if(evn.target.className === 'conf-step__seances-movie taken') {
      //schedule[idH].splice(-1, 1);
      const idLowerF = evn.target.id;
      //const index = schedule[idH].indexOf(idLowerF);
      //schedule[idH].splice(index, 0, Number(idTaken[0]));
      console.log('Летим над элементом = '+idH + ' несем фильм с id= '+idTaken);
    }
  }

  function hendlerDragLeave(e) {
    e.preventDefault();
    e.target.style = 'background: ';
    //console.log('Вылетели из элемента с id= '+e.target.id);
  }

  function hendlerDrop(e, id) {
    e.target.style = 'background: ';
   // console.log('бросили над элементом с классом= '+e.target.className);
    console.log('бросили над элементом с id= '+id);
  }

  return (
    <div className='conf-step__seances-hall' key={id} id={id+'h'}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div
        className='conf-step__seances-timeline'
        id={id+'hg'}
        onDragOver={(evn)=> hendlerDragOver(evn)}
        onDrop={(e)=> hendlerDrop(e, id)}
        onDragLeave={(e)=> hendlerDragLeave(e)}
      >
        <LoadingMovies tension={tension} datas={datas} onSetTension={(idTaken)=> hendlerTension(idTaken)}/>
      </div>
    </div>
  )
}

