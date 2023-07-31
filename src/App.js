import './css/App.css';
import './css/stamp.css';
import { hallsData } from './datas/halls';
import { filmsData } from './datas/filmsData';
import Film from './Components/Film';
import Hall from './Components/Hall';
import { useState } from 'react';

function App() {
  const halls = hallsData;
  const films = filmsData;
  const filmJson = JSON.stringify(films);

  function setTensionStart() {
    const arrHalls = {};
    halls.forEach((el)=> {
      arrHalls[el.id+'hg'] = [el.id, el.id+1, el.id+2];
    });
    return arrHalls;
  }
  
  const [tension, setTension] = useState(setTensionStart);

  function addFilm(num) {
    const numH = Math.floor(Math.random()*3)+1;
    const arr1 = tension[numH].slice();
    arr1.push(Number(num));
    setTension({...tension, [numH]: arr1});
  }
  
//console.log(tension);
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
          <p className="conf-step__paragraph">Для составления сетки зала, перетащите нужный фильм в нужный зал.<br></br>
            Продолжительность работы зала с 10:00 до 23:00.</p>
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
