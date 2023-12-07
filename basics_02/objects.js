// can be declared in two ways 
// 1) literal
// 2) constructor

//singleton (object if made from constructor)

// Object.create

const Juser = {
    name : "monty",
    age : 20,
    location : "blr",
    email : "something@gmail.com",
    isLoggedIn : false,
    "full name" : "monty shonty"  


} // all the keys are considered as a string in JS

//to access the values :

console.log(Juser.email);

console.log(Juser["email"]);
console.log(Juser["full name"]);



const mySym1 = Symbol("hello")

const obj = {
    mySym1 : "hi"
} // wrong way of mentioning symbol in object

console.log(typeof obj.mySym1); //string 


const mySym2 = Symbol("world")

const obj2 = {
    [mySym2] : "wassup"
} // correct way to define symbol in an object

console.log( obj2[mySym2]);
console.log(typeof obj2.mySym2);



Juser.email = "chnaged@gmail.com"
console.log(Juser.email);

// if you dont want to change the values of any key in an object you can use freeze

//Object.freeze(Juser) 


Juser.greetings = function(){
    console.log("hello user");
}

console.log(Juser.greetings); //[Function (anonymous)]
console.log(Juser.greetings()); // hello user 

Juser.greetingsTwo = function(){
    console.log(`hello ${this.name} good morning`);
}

console.log(Juser.greetingsTwo());




