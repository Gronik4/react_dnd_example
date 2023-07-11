import './css/App.css';
import './css/stamp.css';
import { hallsData } from './datas/halls';
import { filmsData } from './datas/filmsData';
import Film from './Components/Film';

function App() {
  const halls = hallsData;
  const films = filmsData;
  return (
    <div className="App">
      <section className='conf-step'>
        <div className='conf-step__wrapper'>
          <div className='conf-step__movies'>
            {films.map((el)=> {return <Film id={el.id} name={el.name} duration={el.duration} img={el.img}/>})}
          </div>
        </div>
        <div className='conf-step__seances'>
          <div className='conf-step__seances-hall'>
            <div className='conf-step__seances-title'>{halls.name}</div>
          </div>
        </div>   
      </section>
    </div>
  );
}

export default App;
