function dice () {
    const roll = Math.floor(Math.random() * 6)+1;
    return roll;
}
let rolls= [];
let ulist = document.getElementById("ul")
while (true){
  let roll = dice();
  rolls.push(roll);
  if (roll===6){
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