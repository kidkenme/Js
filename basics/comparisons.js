
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);

console.log(null > 0); // false     //comparison converts null to a number treating it as 0
console.log(null == 0); // false     // bc only euality check does not convert null to 0
console.log(null >= 0); // true     //here the comparison converts null to 0

console.log(undefined > 0);    // false     
console.log(undefined == 0);  // false     
console.log(undefined >= 0);  //false


// strict-check ("===") it not only checks if the value is same but also checks if the values have the same data type or not

console.log("2" == 2); //true , whenever you use equality and comaprion the data type gets automatically converted
console.log("3" > 2); //true ,bc  JavaScript will coerce the string "3" into a number because the comparison operator > expects numerical operands
console.log("2" === 2); //false, bc it does a strict check compares the value as well as their datatypes
