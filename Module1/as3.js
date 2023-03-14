const integer1 = parseInt(prompt("Insert first integer: "));
const integer2 = parseInt(prompt("Insert second integer: "));
const integer3 = parseInt(prompt("Insert third integer: "));
const sum = integer1+integer2+integer3;
const product = integer3*integer2*integer1;
const average = sum/3;
console.log(sum);
console.log(product);
console.log(average);
document.querySelector('#sum').innerHTML = `The sum is ${sum}`;

document.querySelector('#product').innerHTML = `The pruduct is ${product}`;
document.querySelector('#average').innerHTML = `The average is ${average}`;

