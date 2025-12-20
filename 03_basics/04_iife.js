// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai() //DB CONNECTED


(function chai(){
    console.log(`DB CONNECTED`);
}) ();   // named IIFE: to avoid the problem due to pollution inside by the global scope

( () => {
    console.log(`DB CONNECTED TWO`);
})()

//if two IIFE are to be written, ; is important to end the ivoked function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ak')  //Parameter pass
//DB CONNECTED TWO ak 