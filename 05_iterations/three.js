// ******for of****** */

["", "", ""]
[{}, {}, {}]

for (const iterator of object) {

}


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world"
for (const freet of greetings){
    console.log(`Each char is ${greet}`);    
}


//*******MAPS******* */
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
//console.log(map);        //for unique values

for (const key of map) {
    console.log(key); 
}
//[ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
    console.log(key, ':-', value); 
}
//IN :- India
// USA :- United States of America
// Fr :- France

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of map) {
    console.log(key, ':-', value); 
}   //for of doesnot work for objects