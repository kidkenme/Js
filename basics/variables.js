const accountId=1234; // once intialized cannot be chnaged

var name="harsh"; // not prefered

let email="abc@gmail.com";

someRandomVar="wassup"; // not a good practice

/*
note: prefer not to use “var” because of issue in block scope and functional scope
*/

// console.log(accountId);

let newVariable;

// if only declared and not initialized js will show its value as "undefined"

console.table([name, accountId, email, someRandomVar]);

