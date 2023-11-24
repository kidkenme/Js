let myDate = new Date();

console.log(myDate);
console.log(typeof myDate); // Object

//some methods which can be performed to see dates in different syntax

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());

let myCreatedDate = new Date(2023, 0, 12)          //months starts from zero in javaScript

console.log(myCreatedDate.toLocaleDateString());  // 12/1/2023



let myCreatedDate_2 = new Date(2012, 2, 3, 5, 3 ,3)

console.log(myCreatedDate_2.toLocaleString());



let myCreatedDate_3 = new Date("2023-01-12")

console.log(myCreatedDate_3.toLocaleString());




let myTimeStamp = Date.now()
console.log(myTimeStamp);

// now to get millisec to sec just / by 1000

console.log(Math.floor(myTimeStamp/1000)); // gives time in sec 



let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getMonth()+1); //+1 bc in js months starts froom 0
console.log(newDate.getDay()); // 5 (fri)




let somedate = newDate.toLocaleString('default',{
    weekday: "long"
})                      // you can pass object as parameters and specify how the syntax/format of the date should look like in .toLocaleStrin() method(ctrl+space for suggestion)

console.log(somedate); // friday (it is in long format)









