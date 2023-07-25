export default function schemeFilmService(tension, datas) {
  const renderDate = [];
  const filmData = {};
  let totalTime = 10 * 60; // Время начала работы зала 10:00 в минутах.  
  let totalWidth = 0;

  tension.forEach((el )=> {
    const film = JSON.parse(datas).find(item=> item.id === el);
    const hoursStart = Math.trunc(totalTime/60);
    const minutesStart = totalTime % 60>9? totalTime % 60: `0${totalTime % 60}`;
    const hoursEnd = Math.trunc((totalTime + film.duration)/60);
    const minutesEnd = (totalTime + film.duration) % 60>9? (totalTime + film.duration) % 60: `0${(totalTime + film.duration) % 60}`;
    renderDate.push(
      {
        id: film.id,
        name: film.name,
        dur: film.duration,
        posStart: totalWidth,
        timeStart: `${hoursStart}:${minutesStart}`,
        timeEnd: `${hoursEnd}:${minutesEnd}`
      }
    );
    totalWidth += (film.duration + 10);
    totalTime += (film.duration + 10);
  });

  //const film = JSON.parse(datas).find(item=> item.id === id);
  
  return renderDate;
}
