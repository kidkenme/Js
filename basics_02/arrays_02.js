const marvel = ["hulk", "thor"]

const dc = ["superman", "batman"]

//marvel.push(dc)
//console.log(marvel); // array inside an array [ 'hulk', 'thor', [ 'superman', 'batman' ] ]


const allHeros = marvel.concat(dc)
console.log(allHeros); // returns a single array [ 'hulk', 'thor', 'superman', 'batman' ]

const allHeros2 = [...marvel, ...dc] //(spread operator) most preferred way to merge two or more arrays (... spreads the elments of the array)
console.log(allHeros2);


//flat

const some_array = [1, 2, 3, 4, [5, 6], 7, [8, [9, 10]], 11]

const flatArray = some_array.flat(Infinity) // infinity is basically the depth 

console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



console.log(Array.isArray(flatArray));

console.log(Array.from("hello")); // converts the string into an array [ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from({name : "harsh" })); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]








