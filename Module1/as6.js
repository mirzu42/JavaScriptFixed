const should = confirm('Should I calculate the square root?');
if (should===true){
  const num = parseInt(prompt('Insert a number: '));
  if (num>=0){
    document.querySelector('#num').innerHTML = `The square root of number ${num} is ${Math.sqrt(num)}`;
  }
  else{
    document.querySelector('#num').innerHTML = `The square root of a negative number is not defined`;
  }
}