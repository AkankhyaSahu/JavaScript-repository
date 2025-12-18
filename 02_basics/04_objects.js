//SINGLETON OBJECT
//ex:
const tinderUser = new Object()
//const tinderUser = {} non singleton
//console.log(tinderUser); //{}

tinderUser.id = "abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "choudhary"
        } 
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = Object.assign({}, obj1, obj2) //object assign mdn
//or
const obj3 = {...obj1, ...obj2} //USe this
console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
     {
        id: 1,
        email: "a@gmail.com"
    },
     {
        id: 1,
        email: "a@gmail.com"
    },
]
users[1].email

console.log(Object.keys(tinderUser)); 
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //datatype is array.. loop can be applied
//[ 'abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); 
//[ [ 'id', 'abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


//*******object deconstruct*********** */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ak"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor); //ak
// or 
const {courseInstructor: instructor} = course
console.log(instructor); //ak

// example of object deconstruct****React.js****/
//const navbar = (PaymentResponse.company) => {} //instead of this

const navbar = ({company}) => {  //this is used   
}
navbar(company = "ak")

//API= Application Programming Interface: ex- login using google/facebook
//JSON= JavaScript Object Notation
//API defines how data is requested and sent and JSON defines in what format the data is sent

//*****JSON******* *//API can be given as object or array
// {
//     "name": "ak",
//     "courseName": "js"
//     "price": "free"
// }
[
    {},
    {},
    {}
]
