export default function observe(arr) {
  const numH = ()=> Math.floor(Math.random()*3);
  const numF= ()=> Math.floor(Math.random()*5);
  
  setInterval(()=> {
    const nH = numH();
    const nF = numF();
    if(arr[nH][nH+1].length > 2) {arr[nH][nH+1].splice(0, arr[nH][nH+1].length); return;}
    arr[nH][nH+1].push(nF+1);
    /*for(let i = 0; i < 2; i++) {
      arr[i][i+1].splice(0, i.length); 
    }*/
    //arr.push(numF()+1);
    //console.log(arr[numH()][numH() + 1]);
    
    //console.log(arr);
    return arr;
    }, 5000);
}
