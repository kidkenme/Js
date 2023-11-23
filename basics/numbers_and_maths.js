const num = 100

const score = new Number(100) // defining it to be a number expllicitly


const value = 234.44455
console.log(value.toFixed(1)); //234.4  // converts the number to string, 

console.log(value.toPrecision(4)); //234.4 // it also converts the number to string 234.4 total 4 char are there, priority is before decimal first


const hundreds = 1000000
console.log(hundreds.toLocaleString()); //10,00,000 



/****************************************************MATHS**********************************************************/


console.log(Math); //Object [Math] {} //its an object with multiple properties and methods

console.log(Math.abs(-4)); //4  //converts only -ve to +ve

console.log(Math.round(4.3)); //4

console.log(Math.random()); //generates bw 0 and 1

console.log(Math.random()*10 +1); //bw 1 to 10 //+1 to avoid getting zero

console.log(Math.floor(Math.random()*10)+1); //single digit no. bw 1 to 10


//random no. bw any given range

const min=30
const max =50

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // provides random single digit number bw 30 and 50









