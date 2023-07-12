import React from 'react'

export default function Hall({ schedule, name, id, datas }) {
  const totalTime = {hour: 10, minutes: 0};
  const totalWidth = 0;
  const tension = schedule[id-1][id];

  if(tension.length) {
    console.log(tension);
    tension.forEach(element => {
      console.log(element);
    });
  }
console.log(datas);

  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div className='conf-step__seances-timeline'>
        {tension.length? null: <p>В зале пока сансов не запланировано</p>}
      </div>
    </div>
  )
}

