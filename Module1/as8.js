let leapYears = [];
let ulist = document.getElementById("ul");
const beginning = prompt('Insert the beginning of the interval: ');
const end = prompt('Insert the end of the interval');
console.log(beginning);
console.log(end);
/*for (let i =beginning;i>=end;i++){
  console.log(i);
  if (i % 400 == 0 && i % 100 ==0){

    leapYears.push(i);
}
  else if (i%4 == 0 && i%100 != 0){

    leapYears.push(i);
  }
}*/
index = beginning;
while (true){
    if (index % 400 == 0 && index % 100 ==0){
    leapYears.push(index);
}
    else if (index%4 == 0 && index%100 != 0){
    leapYears.push(index);
  }
  index++;

  if (index>end){
    break;
  }
}
console.log(leapYears.length);

/*for (var i = 0;i>leapYears.length;i++){
  console.log(leapYears[i]);
}*/
let i = 0;
while(true){
  let li = document.createElement('li');
  li.innerText = leapYears[i];
  ulist.appendChild(li);
  i++;
  if (i>=leapYears.length){
    break
  }
}