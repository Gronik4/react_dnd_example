import React, { useState } from 'react';
import LoadingMovies from './LoadingMovies';
import changeTension from './sevices/changeTension';

export default function Hall({ name, id, schedule, datas }) {
  const [tension, setTension] = useState(schedule[id+'hg']);
 
  function hendlerDEnd(e) {
    const satellite = changeTension(e, tension, 'del');
    setTension(satellite);
  }

  function cleanerHall() {
    setTension([]);
    document.getElementById(id+'hg').style =  'background: ';
  }
  
  function hendlerDragOver(evn) {
    evn.preventDefault();
    if(evn.currentTarget.className === 'conf-step__seances-timeline') {
      evn.target.style = 'background: #9adeed';
      //console.log(evn.currentTarget.className);
    }
  }
  function hendlerDragEnter(e) {
    e.preventDefault();
    if(e.currentTarget.className ===('conf-step__seances-timeline')){
      console.log('Достигли целевого= '+e.currentTarget.id);
      const satellite = changeTension(e, tension, 'addend');
      setTension(satellite);
    }
    /*if(e.target.classList.contains('conf-step__seances-movie')) {
      const satellite = changeTension(e, tension, 'add');
      setTension(satellite);
    }*/
  }
  
  function hendlerDragLeave(e) {
    //e.preventDefault();
    const place = e.target.closest('conf-step__seances-timeline');
  if(e.currentTarget.className === 'conf-step__seances-timeline') {
    e.target.style = 'background: ';
    console.log('Вылетели из целевого= '+place.id )
    const satellite = changeTension(e, tension, 'delend');
    setTension(satellite);
  }
  /*if(e.target.className === 'conf-step__seances-movie') {
    e.target.style = 'background: ';
    const satellite = changeTension(e, tension, 'del');
    setTension(satellite);
  }*/
    //
  }

  function hendlerDrop(e) {
    e.target.style = 'background: ';
   // console.log('бросили над элементом с классом= '+e.target.className);
    //console.log('бросили над элементом с id= '+e.target.id);
  }

  return (
    <div className='conf-step__seances-hall' key={id} id={id+'h'}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div
        className='conf-step__seances-timeline'
        id={id+'hg'}
        onDragOver={(evn)=> hendlerDragOver(evn)}
        onDrop={(e)=> hendlerDrop(e)}
        onDragLeave={(e)=> hendlerDragLeave(e)}
        onDragEnter={(e)=> hendlerDragEnter(e)}
      >
        <LoadingMovies tension={tension} datas={datas} onDelFilm={(e)=> hendlerDEnd(e)}/>
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

