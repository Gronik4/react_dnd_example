export default function changeTension(e, source, flag) {
  const goal = Number(e.target.id[0]);
  const idTaken = document.querySelector('.taken').id;
  const arr = source.slice();
  let index = 0;
  switch(flag) {
    case 'add':
      index = arr.indexOf(goal);
      arr.splice(index, 0, Number(idTaken[0]));
      break;
    case 'addend':
      arr.push(Number(idTaken[0]));
      break;
    case 'del':
      index = arr.indexOf(Number(idTaken[0]));
      arr.splice(index, 1);
      break;
    case 'delend':
      arr.pop(Number(idTaken[0]));
      break;
    default: break;
  }
  console.log(arr);
  return arr;
}
