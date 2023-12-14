// immediately invoked function expression (iife)

//  IIFEs prevent pollution of the global JS scope.


(function work(){
    //named iife
    console.log(`connected`);
})();




( () => {
    console.log(`connected`);
} ) ();




((name) => {
    console.log(`welcome ${name}`);
})("majnu")

