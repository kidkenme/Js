function printName(){
    console.log("name");
}

printName()



function addTwoNumber(number1, number2){
   return number1 + number2
}

console.log(addTwoNumber(1,2));



function loginUserMessage(username){
    if(!username){
        console.log("please enter your username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("harsh"));



// if no name is passed you can provide a default name as well in the parameters

function loginUserMessage2(username = "unknown user"){

    return `${username} just logged in`
}

console.log(loginUserMessage2()); // unknown user just logged in


const user = {
    name : "vinod",
    age : 10,

}

function handleObjects(user){
    console.log(`username is ${user.name} and age is ${user.age}`);
}

handleObjects(user)

handleObjects({
    name: "sam",
    age: 9
})


const newArray = [1, 2, 3, 4, 5]

function returnSecondValue(myArray){
    return myArray[1]
}

console.log(returnSecondValue(newArray));