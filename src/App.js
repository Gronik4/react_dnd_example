import './css/App.css';
import './css/stamp.css';
import { hallsData } from './datas/halls';
import { filmsData } from './datas/filmsData';
import Film from './Components/Film';
import Hall from './Components/Hall';
import SchemeFilm from './Components/SchemeFilm';

function App() {
  const halls = hallsData;
  const films = filmsData;
  const filmJson = JSON.stringify(films);
  const scheduleHalls = [];
  halls.forEach((el)=> {
    let idHall = {};
    idHall[el.id] = []
    scheduleHalls.push(idHall)
  });
  
  scheduleHalls[0][1].push(2, 1, 3);
  //arr1[1].push(3, 1, 2);
  /*console.log(scheduleHalls);
  console.log(arr1);
  console.log(arr1[1][0]);*/

  return (
    <div className="App">
      <section className='conf-step'>
        <div className='conf-step__wrapper'>
          <div className='conf-step__movies'>
            {films.map((el)=> {return <Film id={el.id} name={el.name} duration={el.duration} img={el.img}/>})}
          </div>
        </div>
        <div className='conf-step__legend'>
          <span className='clearing-time__span'></span> - время уборки и проветривания зала 10 минут
        </div>
        <div className='conf-step__seances'>
          {halls.map((el)=> {
            return <Hall name={el.name} id={el.id} schedule={scheduleHalls} datas={filmJson}/>
            })}
        </div>   
      </section>
    </div>
  );
}

export default App;
