import './css/App.css';
import './css/stamp.css';
import { hallsData } from './datas/halls';
import { filmsData } from './datas/filmsData';
import Film from './Components/Film';
import Hall from './Components/Hall';
import observe from './Components/DraggingState';
import { useState } from 'react';

function App() {
  const halls = hallsData;
  const films = filmsData;
  const filmJson = JSON.stringify(films);
  function setTensionStart() {
    const arrHalls = {};
    halls.forEach((el)=> {
      arrHalls[el.id] = [];
    });
    return arrHalls;
  }
  
  const [tension, setTension] = useState(setTensionStart);
  
  function addFilm(num) {
    console.log();
    const numH = Math.floor(Math.random()*3)+1;
    const arr = [...tension[numH], Number(num)];
    console.log(arr);
    setTension({...tension, [numH]: arr});
  }
  
  //renderTension = ;
  //  
  //arrHalls[2].push(3, 1);
  //console.log(tension);
  console.log(tension);

  return (
    <div className="App">
      <section className='conf-step'>
        <div className='conf-step__wrapper'>
          <div className='conf-step__movies'>
            {films.map((el)=> {
              return <Film
                key={el.id}
                id={el.id}
                name={el.name}
                duration={el.duration}
                img={el.img}
                onSelectFilm={(num)=> addFilm(num)}
              />
            })}
          </div>
        </div>
        <div className='conf-step__legend'>
          <span className='clearing-time__span'></span> - Время уборки и проветривания зала 10 минут
        </div>
        <div className='conf-step__seances'>
          {halls.map((el)=> {
            return <Hall key={el.id} name={el.name} id={el.id} schedule={tension} datas={filmJson}/>
            })}
        </div>   
      </section>
    </div>
  );
}

export default App;
