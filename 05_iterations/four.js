//**********for in loop in object****** */


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
} 
//js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for rubby
// swift shortcut is for swift by apple


//**********for in loop in array****** */
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
for (const key in map) {
   console.log(key); 
}  //not iterable