const myArray = [0, 1, 2, 3, 4, 5]
//console.log(myArray[0]);

const myHearos = ["ironman","spiderman"]

// Array methods

// myArray.push(6) //add at last
//console.log(myArray); 
// myArray.pop() //remove last number
// myArray.unshift(9) //add to first position shift to remove the unshift number

// console.log(myArray.includes(9)); //false
// console.log(myArray.indexOf(9)); //-1 (false)

// const newArray = myArray.join()
// console.log(myArray); // [0, 1, 2, 3, 4, 5]
// console.log(newArray); // 0, 1, 2, 3, 4, 5 changes the data type into slice

//slice, splice
console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1); //1, 2
console.log("B", myArray); //0,1,2,3,4,5

const myn2 = myArray.splice(1, 3) //it manipulates the original array
console.log("C", myArray); //0,4,5
console.log(myn2); //1,2,3




