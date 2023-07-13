export default function schemeFilmService(tension, datas) {
  const renderDate = [];
  let totalTime = 10 * 60; // Время начала работы зала 10:00 в минутах
  let totalWidth = 0;

  tension.forEach(el => {
    const film = JSON.parse(datas).find(item=> item.id === el);
    const hoursStart = Math.round(totalTime/60);
    const minutesStart = totalTime % 60>9? totalTime % 60: `0${totalTime % 60}`;
    const hoursEnd = Math.round((totalTime + film.duration)/60);
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
    );console.log(totalTime);
    totalWidth += (film.duration + 9);
    totalTime += (film.duration + 10);
  });
  
  return renderDate;
}
