luvut = [];
for (let input; input !== 0;) {
  input = parseInt(prompt('Insert number: '));
  luvut.push(input);
}
luvut.pop();
sortedLuvut = new Float64Array(luvut);

sortedLuvut.sort().reverse();
for (let i = 0; i < sortedLuvut.length; i++) {
  console.log(sortedLuvut[i]);
}
