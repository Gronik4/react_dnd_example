export default function schemeFilmService(idF, datas) {
  const film = JSON.parse(datas).find(item=> item.id === idF);
}
