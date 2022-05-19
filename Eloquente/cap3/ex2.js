/*
Programa com função recursiva que determina se um número é
par ou ímpar
*/

function isEven(x){
  if(x < 0){
    return "Número negativo";
  }
  if(x == 0)
  return true;
  else if(x == 1)
    return false
  else{
    x -= 2;
    return isEven(x);
  }
}
console.log(isEven(5));