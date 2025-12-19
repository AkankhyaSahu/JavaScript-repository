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

//let a = 300 -Global scope
if (true){
    let a = 10       //-inside if else, block scope
    const b = 20
    var c = 30
    console.log("INNER: ",a);    
}
console.log(a); 
//INNER: 10 
//300

//scope is in curly braces
//global scope, block scope
//global scope inside web console and using node is different



//******************nested scope****** */
function one(){
    const username = "ak"

    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website); will give error as it is executed outside the scope

    two() //ak
}
one()

if (true) {
    const username = "ak"
    if (username === "ak") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website); //error: outside the scope
}
console.log(username); //error: outside the scope
//without the errors, ak yt will be printed



//***************Interesting concept******* */
function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)