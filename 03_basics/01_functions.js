function sayMyName(){
    console.log("A");
    console.log("K");
}
sayMyName()
//A
K

function addTwoNumbers(number1, number2){ //number1, number2 are parameters
    console.log(number1 + number2);  
}
addTwoNumbers(3, 4) //7   3, 4 are arguments
addTwoNumbers(3, "4") //7
addTwoNumbers(3, "a") //3a
addTwoNumbers(3, null) //3

//const result = addTwoNumbers(3, 5)
console.log("Result: ", result); //Result: Undefined

//To avoid the above result, we can write in another form
function addTwoNumbers(number1, number2){ 
    // let result = (number1 + number2);  
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result); // Result: 8

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("ak")); //ak, ***is no argument is passed, then it will give 'undefined'

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); //Please enter a username

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); //Please enter a username

//if we dont want undefined
function loginUserMessage(username= "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); //sam just logged in
console.log(loginUserMessage(ak)); //ak just logged in



//*************SHOPPING CARDS(where arguments is unknown******** */
function calculateCartPrice(...num1){ //...rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); //[200, 400, 500]

function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 1200)); //500, 1200

//***object pass****** */
const user = {
    username: "ak",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user) //Username is ak and price is undefined
//or
handleObject({
    username: "ak",
    price: 399
})           //Username is sk and price is 399


//************array pass********* */
const myNewArray = [200, 400, 100, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 100, 500])); //400
