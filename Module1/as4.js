const name = prompt("Insert your name: ");
const one = "Gryffindor";
const two = "Ravenclaw";
const three = "Slytherin";
const four = "Hufflepuff";

const randomNum = Math.floor(Math.random() * 4) + 1;
switch (randomNum) {
  case 1:
    document.querySelector('#uare').innerHTML = name + ', you are ' + one;
    break;
  case 2:
    document.querySelector('#uare').innerHTML = name + ', you are ' + two;
    break;
  case 3:
    document.querySelector('#uare').innerHTML = name + ', you are ' + three;
    break;
  case 4:
    document.querySelector('#uare').innerHTML = name + ', you are ' + four;
    break;
}
