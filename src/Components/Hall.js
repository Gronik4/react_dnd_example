import React, { useState } from 'react';
import LoadingMovies from './LoadingMovies';
import changeTension from './sevices/changeTension';
import testTension from './sevices/testTension';

export default function Hall({ name, id, schedule, datas }) {
  const [tension, setTension] = useState(schedule[id+'hg']);
 
  function hendlerDEnd() {;
    const satellite = changeTension(0, tension, 'del');
    setTension(satellite);
  }

  function cleanerHall() {
    setTension([]);
    document.getElementById(id).style =  'background: ';
  }
  
  function hendlerDragOver(e) {
    e.preventDefault();
    
    if(e.target.className === 'conf-step__seances-timeline') {
      e.target.style = 'background: #8ADEE9';
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = '3px dashed red';
    }
  }
  
  function hendlerDragLeave(e) {
    e.preventDefault();
    if(e.target.className === 'conf-step__seances-timeline') {
      e.currentTarget.style = 'background: ';
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = 'none';
    }
  }

  function hendlerDrop(e) {
    const taken = document.querySelector('.taken');
    console.log(taken);
    //const pass = testTension(tension, datas);
    if(e.target.className === 'conf-step__seances-timeline') {;
      const satellite = changeTension(0, tension, 'addend');
      setTension(satellite);
      e.currentTarget.style.background = '';
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = 'none';
      const satellite =  changeTension(upper.id, tension, 'add');
      setTension(satellite);
    }
    
  }

  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div
        className='conf-step__seances-timeline'
        id={id}
        onDragOver={(evn)=> hendlerDragOver(evn)}
        onDrop={(e)=> hendlerDrop(e)}
        onDragLeave={(e)=> hendlerDragLeave(e)}
      >
        <LoadingMovies tension={tension} datas={datas} onDelFilm={()=> hendlerDEnd()}/>
      </div>
      <button
        type='reset'
        className='btn' 
        style={{'marginTop': '20px'}}
        onClick={()=> cleanerHall()}
        >
          Очистить сетку зала {name}
        </button>
    </div>
  )
}

