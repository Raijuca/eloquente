/*
Dois programas que imprimem os números de 1 a 100
substituindo multiplos de 3 por Fizz, multiplos de 5 por
Buzz e de ambos por FizzBuzz
*/

/*for(var i = 1;i <= 100; i++){
  if(i%3 == 0){
    if(i%5 == 0){
      console.log("FizzBuzz")
    }else{
      console.log("Fizz")
    }
  }else if(i%5 == 0){
    console.log("Buzz")
  }else{
    console.log(i)
  }
}*/
for(var i = 1;i <= 100; i++){
  var str ="";
  if(i%3 == 0){
    str += "Fizz";
  }
  if(i%5 == 0){
    str += "Buzz";
  }
  console.log(str || i);
}