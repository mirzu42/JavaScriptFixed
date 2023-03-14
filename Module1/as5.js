const input = parseInt(prompt('Insert a year: '));
if (input % 400 == 0 && input % 100 ==0){
  document.querySelector('#year').innerHTML = `${input} is a leap year!`;
}
else if (input%4 ==0 && input%100 != 0){
  document.querySelector('#year').innerHTML = `${input} is a leap year!`;
  }
else{
  document.querySelector('#year').innerHTML = `${input} is not a leap year!`;
}