/*
Programa de função que imita a função nativa min()
recebe dois valores como argumento e retorna o menor
*/

function min(n1, n2){
  if(n1 < n2){
    return n1;
  }
  else if(n2 < n1){
    return n2;
  }
  else{
    return "Iguais";
  }
}
console.log(min(1,0.99999999999999999));