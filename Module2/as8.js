function concat(array){
  let joined ="";
  for (let i =0; i<array.length;i++){
    joined = joined+array[i]
  }
  return joined;
}
console.log(concat(["Mörö", "ÖÖ", "hööö","pöööö"]));