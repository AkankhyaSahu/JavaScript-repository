const userEmail = "ak@kn.ai"  //truthy, falsy values
if (userEmail) {
    console.log("Got ur email");
} else {
    console.log("Dont have user email");
}

// FALSY VALUES
// false, 0, -0, BigInt(0n), ""(empty string), null, undefined, NaN

// TRUTHY VALUES
// "0", 'false', " ", []empty array, {}, function(){}

//to check if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");  
}

//to check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
   console.log("Object is empty");
}

//In browser console
false == 0 //true
false == '' //true
0 == '' //true

//******NULLISH COALESCING OPERATOR(??): null undefined****/
let val1;
val1 = 5 ?? 10 //5
val1 = null ?? 10 //10
val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //20
console.log(val1); 

//*****Terniary Operator*** */
condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// more than 80
