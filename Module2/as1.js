let array=[];
while (true){
  const numbers = prompt("Give 5 numbers seperated by comma");
  array = numbers.split(",").map(Number);
  if(array.length ===5){
    break;
  }
  else{
    alert("Incorrect input!")
  }

}


let rev = [];
for (let i = array.length;i>0;i--) {
  rev.push(array[i-1]);
}

for (let i = 0;i<rev.length;i++) {
  console.log(rev[i]);
}
