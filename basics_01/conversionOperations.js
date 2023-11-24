 
 let val=123;

 console.log(typeof(val)) // number

 val="123"

 console.log(typeof(val)) // string

 val="123abc"

 let valInNumber = Number(val) // converting "123abc" to number

 console.log(typeof(valInNumber)) // number // "123abc"does gets converted into number but its value comes out to be NaN(NOt a number)

 console.log(valInNumber) //NaN

 console.log(typeof NaN) // number


/******************************************************************** */

let someVal = null

console.log(typeof someVal) //object

let someValToNum = Number(someVal) 

console.log(someValToNum) // 0

/*********************************************************************/

let someVal2 = undefined

let someVal2ToNum= Number(someVal2)

console.log(someVal2ToNum) // NaN

/*********************************************************************** */

let isBool = true

let convertToNum = Number(isBool)

console.log(convertToNum) // 1 (and if isBool=false then 0)

/*************************************************************************/

let stringVal = "hello"

let stringToNum = Number(someVal);

console.log(stringToNum) // NaN

 
// "33" => 33
// "123abc" => NaN (but typeof NaN is number)
// true => 1 or any number except for 0

let loggedIn = ""

let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn) //false

let loggedIn2 = "hello"

let booleanLoggedIn2 = Boolean(loggedIn2)
console.log(booleanLoggedIn2) //true

// "" => false // conversion of empty string to boolean gives false
// "hello" => true // conversion of non-empty string to boolean gives true


let someNumber = 22

let stringNumber = String(someNumber)
console.log(someNumber); //33
console.log(typeof someNumber);// string


/******************************** OPERATIONS ******************************************************************/


let str1 = "hello"
let str2 = "woe"

let str3 = str1 + str2

console.log(str3); //hellowoe

// STRING first then everything's converted into string

console.log(typeof("3" + 2)); //string and 32
console.log(typeof("2"+ 3 + 4 )); //string and 234

console.log(typeof(2 + "3" )); //string abd 23
console.log(typeof(2 + 3 + "4" )); //string and 54

let nom = 3 + 4 + "3"

console.log(typeof nom); //string

console.log(+true); // 1

//console.log(true +); // error

console.log(+""); // 0

