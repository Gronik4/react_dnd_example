import './css/App.css';
import './css/stamp.css';
import { hallsData } from './datas/halls';
import { filmsData } from './datas/filmsData';
import Film from './Components/Film';
import Hall from './Components/Hall';

function App() {
  const halls = hallsData;
  const films = filmsData;
  const filmJson = JSON.stringify(films);
  const renderTension = [];
  halls.forEach((el)=> {
    let idHall = {};
    idHall[el.id] = []
    renderTension.push(idHall)
  });
  
  //renderTension[0][1].push(2, 1, 3, 5);
  renderTension[1][2].push(3, 4, 5);
  //console.log(renderTension);

  return (
    <div className="App">
      <section className='conf-step'>
        <div className='conf-step__wrapper'>
          <div className='conf-step__movies'>
            {films.map((el)=> {return <Film key={el.id} id={el.id} name={el.name} duration={el.duration} img={el.img}/>})}
          </div>
        </div>
        <div className='conf-step__legend'>
          <span className='clearing-time__span'></span> - Время уборки и проветривания зала 10 минут
        </div>
        <div className='conf-step__seances'>
          {halls.map((el)=> {
            return <Hall key={el.id} name={el.name} id={el.id} schedule={renderTension} datas={filmJson}/>
            })}
        </div>   
      </section>
    </div>
  );
}

export default App;
