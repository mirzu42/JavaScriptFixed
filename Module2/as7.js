function dice (max) {
    const roll = Math.floor(Math.random() * max)+1;
    return roll;
}
let rolls= [];
let ulist = document.getElementById("ul")
max = parseInt(prompt("How many sides?"))
while (true){
  let roll = dice(max);
  rolls.push(roll);
  if (roll===max){
    break;
  }
}
  let i = 0;
  while (true) {
    let li = document.createElement('li');
    li.innerText = rolls[i];
    ulist.appendChild(li);
    i++;
    if (i >= rolls.length) {
      break;
    }
}