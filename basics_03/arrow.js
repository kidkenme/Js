const user ={
    name: "sam",
    age: 20,
    
    welcomeMessage: function(){
        console.log(`${this.name}, welcome!`);
    }
} // using "this" to refer to current context

user.name="harsh"
user.welcomeMessage();

console.log(this); //{} empty object as it refers to global context and there is nothing in it
// but if you run this in browser it will show windows bc in browser the global object i s the window object


function fn(){
    const username = "harsh"
    console.log(this.username);
} // "this" does not work in function

fn()


const fun = function () {
    const username = "hi"
    console.log(this.username); //undefined
    
} 

fun()


//arrow function

const arrowFunction = () => {

    const username = "harsh"
    console.log(this.username); //undefined

}
arrowFunction();



const addTwo = (num1, num2) => {

    return num1 + num2

}
console.log(addTwo(2,3));

//or implicit return => use () rather than {}

const addOne = (num) => (num +1)

console.log(addOne(3));

// how will you return an object

const object = () => ({usrname : "harsh"})

console.log(object());


