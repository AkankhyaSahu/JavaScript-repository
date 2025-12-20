const user = {
    username: "ak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //"this" refers to the current context
    }
}
user.welcomeMessage()  //ak, welcome to website
user.username = "sam"
user.welcomeMessage() //sam, welcome to website


const user = {
    username: "ak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}
console.log(this); //{}

//IMP: the object in browser is "Window" object/


const user = {
    username: "ak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); 
    }
}
user.welcomeMessage()  
//ak , welcome to website
// {
//   username: 'ak',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username = "sam"
user.welcomeMessage()
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


function me(){
    let username = "ak"
    console.log(this.username); //undefined
}
me()

const me = function (){
    let username = "ak"
    console.log(this.username); //undefined
}
me()



//******arrow functions */

const me = () => {
    let username = "ak"
    console.log(this); //{}
}
me()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)) // 7 

//**implicit return** */
const addThree = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3,4)) //7 

const addFour = (num1, num2) => ({username: "ak"})
console.log()

//**in loop**** */
const myArray = [2, 5, 7, 9]
myArray.forEach(function() {})
//or
myArray.forEach(() => {})