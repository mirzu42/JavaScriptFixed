let luvut = [];

while (true){
  let input = prompt("Insert number: ")
  if (luvut.includes(input)){
    break;
  }
  luvut.push(input);

}
sortedLuvut = new Float64Array(luvut).sort();

for (let i = 0;i<luvut.length;i++) {  
  console.log(sortedLuvut[i]);
}