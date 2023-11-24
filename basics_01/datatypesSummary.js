// 7 primitive datatypes

// String, Number, null, undefined, symbol, BigInt


const str= "hwhw"


const score = 100
const newScore = 100.3
// both of the above variables are of type Number



const outsideTemp = null
console.log(outsideTemp); //null



let isHappy; //or 
let isHappy2 = undefined


const id = Symbol('123')
const id_2 = Symbol('123')
//the return value of these two variables is not same

console.log(id===id_2); //false



const BigNumber = 1234567890987122n // represent "n" in the end
console.log(typeof BigNumber); // bigint




// non-primitive(reference): Array, Objects, Functions

const movies = ["rockyBalboa", "satya", "Godfather"] //reference type

//objects are in curly-braces { ..... } key-value pair

{
    name: "guri";
    age: 12
}

// we can store it in a variable as well

let myObj = {
    name: "guri",
    age: 12
}

//we can have functions as well as an object within {.....}


//functions:

void function(){
    console.log("hhi");

}

//we can treat functions as variables in Js

const functionVariable = function(){
    console.log("hi")
}

console.log(functionVariable()); // hi



// the return type of any non-primitive is "object"

console.log(typeof movies); //object
console.log(typeof myObj); //object
console.log(typeof functionVariable); //fuction (object)
console.log(typeof id); // symbol








