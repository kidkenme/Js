//Arrays

const arry = [1, 2, 3, 'hello', 12.3, true]  // stores heterogeneous data
console.log(arry[3]);

const myMovies = ["scarface", "godfather", "Strangelove"]

const myArr = new Array(1, 2, 3, 4)

// array method


myArr.push(5)
console.log(myArr);

// pop() takes no argument, and pops the last ele from the array

const newArray = [1,2,3,4,5]

newArray.pop() // removes the last ele i.e 5
console.log(newArray); // [ 1, 2, 3, 4 ]

//unshift() // adds a new ele at the front of the array which makes it

newArray.unshift(99)
console.log(newArray); // [ 99, 1, 2, 3, 4 ]

//shift() // it just removes the ele from the begining

newArray.shift()
console.log(newArray); [ 1, 2, 3, 4 ]


console.log(newArray.includes(99)); //false
console.log(newArray.indexOf(6)); // if present returns the index if not then returns -1

//join()

const arr =  [1, 2, 3, 4]

const someArray = arr.join() // converts the array into string

console.log(someArray); // 1,2,3,4
console.log(typeof someArray); // string

// slice (return a section of an array), splice

const array1 = [1, 2, 3, 4, 5, 6]
console.log(array1);
const slicedArray = array1.slice(0, 3)
console.log(slicedArray); // [1, 2, 3]

//splice() returns a section of an array and permanently removes that section from the array

const splicedArray = array1.splice(0, 3)
console.log(splicedArray); //[1, 2, 3]
console.log(array1); // [4, 5, 6]






