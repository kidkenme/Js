//string interpolation: we make placeholders("${}") and we directlly put the variables here ${variables}

const name = "Doom"
const totalAlbums = 20

console.log(name + totalAlbums);  // not a good practice instead use string interpolation

console.log(`name is ${name} and number of albums is ${totalAlbums} `);
console.log(` ${name} ${totalAlbums} `);

const str = new String('something')


//apllying methods on the string
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('m'));



console.log(str.substring(3)) //ething
console.log(str.substring(0, 4)); // o/p: some ,here 4 in exclusive


console.log( str.slice(0, 4)); //some

//note: slice can accept negative index as its parameter, starts behind

console.log( str.slice(-2)); //ng

const someString = '   hello   '
console.log(someString); //   hello 

//to eliminate the whitespaces use trim

console.log(someString.trim()); //trim() removes whitespaces from the begining and end both
console.log(someString.trimEnd());
console.log(someString.trimStart());

const url = "https://random.com/pintu%20cheetah"

console.log(url.replace('%20', '-')); //.replace('searchValue', replaceValue)

console.log(url.includes('pintu')); // true

const newName = 'sher-pintu-cheetah'

console.log(newName.split('-')); //[ 'sher', 'pintu', 'cheetah' ]










