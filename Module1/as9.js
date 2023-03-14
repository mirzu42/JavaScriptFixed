const num = prompt('Insert a number: ');
let isPrime = true;
if (num>1) {
  for (let i = 2, x = Math.sqrt(num); i <= x; i++) {
    if (num % i === 0) {
      document.querySelector('#prime').innerHTML = `number ${num} is not prime`;
      isPrime = false;
    }

  }

}
else{
  document.querySelector('#prime').innerHTML = `number ${num} is not prime`;
  isPrime = false;
  }
if (isPrime === true){
  document.querySelector('#prime').innerHTML = `number ${num} is prime`;
}