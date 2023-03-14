const rolls = prompt('How many dice rolls?');
var dies = [];
let sum =0;
for (let i =0; i<=rolls;i++){
  const roll = Math.floor(Math.random() * 6) + 1;
  dies.push(roll);
}
for (let i =0; i<dies.length;i++){
  sum += dies[i];
}
document.querySelector('#sum').innerHTML = `The sum is ${sum}`;