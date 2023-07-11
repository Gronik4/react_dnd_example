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
  //console.log(films[0].id);
  return (
    <div className="App">
      <section className='conf-step'>
        <div className='conf-step__wrapper'>
          <div className='conf-step__movies'>
            {films.map((el)=> {return <Film id={el.id} name={el.name} duration={el.duration} img={el.img}/>})}
          </div>
        </div>
        <div className='conf-step__seances'>
          {halls.map((el)=> {
            return <Hall name={el.name} id={el.id}>
              <SchemeFilm id={films[0].id} name={films[0].name} duration={films[0].duration}/>
            </Hall>
            })}
        </div>   
      </section>
    </div>
  );
}

export default App;
