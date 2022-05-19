function countBs(str){
  var num = 0;
  for(var i=0;i < str.length;i++){
    if(str.charAt(i) == "B"){
      num += 1;
    }
  }
  return num;
}
console.log(countBs("bello My best friend billy"));

function countChar(str, char){
  var num = 0;
  for(var i=0;i < str.length;i++){
    if(str.charAt(i) == char){
      num += 1;
    }
  }
  return num;
}

console.log(countChar("O rato roeu a roupa 
do rei de roma","r"))