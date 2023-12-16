const userEmail = []

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

// falsy values

//  false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy value

// "0", 'false', [], {}, function(){}, " "


if(userEmail.length==0){
    console.log("empty array");
}



const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
        console.log("object is empty");
}


// Nullish Coalescing Operator (??) : null undefined


let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;

val2 = null ?? 10
console.log(val2);

let val3 = null ?? 5 ?? 10

console.log(val3);


// ternary operator

//condition ? true : false 

const price = 100;

price >= 40 ? console.log("yes") : console.log("false");
