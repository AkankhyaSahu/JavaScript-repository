// let var and const

let a = 10
const b = 20
var c = 30
console.log(a); //10
console.log(b); //20
console.log(c); //30

if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a); //error
console.log(b); //error
console.log(c); //30

var c = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(c); //30 but should be given 300

//let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a); //200

//let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);    
}
console.log(a); 
//INNER: 10 
//300