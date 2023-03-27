let dogs = [];
let ulist = document.getElementById('ul');
for (let i = 0; i <= 5; i++) {
  name = prompt(`Name ${i + 1}: `);
  dogs.push(name);
}
dogs = dogs.sort().reverse();

let i = 0;
while (true) {
  let li = document.createElement('li');
  li.innerText = dogs[i];
  ulist.appendChild(li);
  i++;
  if (i >= dogs.length) {
    break;
  }
}