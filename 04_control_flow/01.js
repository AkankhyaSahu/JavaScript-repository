// //if

// if (condition){ //true or false

// }

// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }

// //  <, >, <=, >=, ==, !=, ===(checks type)

// if ( temperature < 50 ){ 
//   console.log("less than 50");  
// }
// console.log("temperature is greater than 50"); //less than 50


//if else
const temperature = 41
if ( temperature === 40 ){ 
    console.log("less than 50");  
} else{
    console.log("temperature is greater than 50");
}
//temperature is greater than 50


//*******related to scope*** */
 const score = 200
 if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
//User power: fly

//but if the console.log is taken outside the block scope, it will show an error



const balance = 1000
// DONOT DO: if (balance > 500) console.log("test"), console.log("test2");
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}
//less than 1200