//1) singleton object
const JSuser = new Object()
console.log(JSuser); // {} empty object


//2) non-singleton object
const JSuser2 = {}
console.log(JSuser2);// {}


JSuser.id = 1
JSuser.name = "rock"
JSuser.email = "rock@email.com"
JSuser.isLoggedIn = false

console.log(JSuser);


// nested object
const regularUser = {
    fullname : {
        userfullname : {
            firstname : "monty",
            lastname : "python"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


//merging two or more objects as one 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign(obj1, obj2) //this assigns obj2 to obj1 hence your obj1 changes
//const obj4 = Object.assign({}, obj1, obj2 ) // assigns obj1 and obj2 to an empty {} (bc the first parameter is {} which becomes the target and rest becomest source )

//console.log(obj3);
//console.log(obj1);


// but we'd rather use spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);


// array of objects

const user = [
    {
        id : "123",
        name : "alex"
    },

    {
        id : "456",
        name : "ballu"
    }
]

console.log(user[1].name);


console.log(JSuser);

// access only keys and values
console.log(Object.keys(JSuser)); // returns an array of keys in an object
console.log(Object.values(JSuser)); // returns an array of values in an object
console.log(Object.entries(JSuser)); // returns an array of keys-value in an object




const course = {
    coursename: "js",
    price: "999",
    courseduration: "80hr"
}

// object de-structure
const {courseduration} = course
console.log(courseduration);

//or
const {courseduration: duration} = course
console.log(duration); 


//json

// {
//     "name" : "travis",
//     "age" : "20",
//     "id" : "1234"
// }



