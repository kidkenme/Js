// global-level scope

let a = 200
const b = 300
var c= 400


if(true){

    //block-level scope
    let a = 10
    const b = 20
    var c = 30
}

//console.log(c); //prints 30 rather than 400 this is the problem w "var" 


function one(){
    const username = "rambo"

    function two(){
        const website = "yt"
     //   console.log(username);
    }
    // console.log(website);
    two()
   // console.log(username);
}
one()



if(true){
    const variable = "hello"
    if(variable==="hello"){
        const variable2 = "namaste"
        //console.log(variable + variable2);
    }


}


// ++++++++++++++++++++++++++++++++ hoisting++++++++++++++++++++++++++++++


addOne(2)
function addOne(num){
    return num + 1
}




addTwo(4)
const addTwo = function(num){
    return num + 2
}



