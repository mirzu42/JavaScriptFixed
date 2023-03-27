const participants = prompt("How many participants?");
let names = [];
let olist = document.getElementById("ol")
for (let i = 0;i<participants;i++) {
  name = prompt(`Name ${i+1}: `);
  names.push(name);
}
names =names.sort();
/*for (let i =0;i<names.length;i++) {
  console.log(names[i]);
}*/
let i = 0;
while(true){
  let li = document.createElement('li');
  li.innerText = names[i];
  olist.appendChild(li);
  i++;
  if (i>=names.length){
    break
  }
}