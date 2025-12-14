//const { PureComponent } = require("react")

// singleton- if made from contructor
// Object.create

//object literals

const JsUser = {
    name: "Ak",
    "full name": "akankhya",
    age: 20,
    location: "Pune",
    email: "ak@google.com", 
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"],
}
// console.log(JsUser.email); //ak@google.com
// console.log(JsUser["email"]); //ak@google.com
// console.log(JsUser["full name"]); //prefer to use

//important
const mySym = Symbol("key1")
const Js = { 
    [mySym]: "mykey1" 
}
//console.log(Js[mySym]); //mykey1
//symbol syntax is []

// JsUser.email = "ak@nck.com"
// Object.freeze(JsUser) //wont change the value
// JsUser.email = "ak@micro.com"
// console.log(JsUser);

//function add
JsUser.greeting = function(){
    console.log("Hello"); //Hello
}
console.log(JsUser.greeting); //function (anonymous)
