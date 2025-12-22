//*******foreach loop******//
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach ( (item) => {
    console.log(item);
    return item
})
console.log(values); //undefined
//for each value doesnot return any value


//*******filter operation*** */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {  //returns values
    return num > 4
} ) 
console.log(newNums);
//[5, 6, 7, 8, 9, 10]//returns values


const newNums1 = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums1.push(num)
    }
})
console.log(newNums1);
//returns values

