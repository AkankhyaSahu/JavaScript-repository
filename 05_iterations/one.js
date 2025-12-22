//******* */ for loop******

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
} //0 1 2 3 4 5 6 7 8 9 10

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 3){
        console.log("3 is the best number");
    }
    console.log(element);
} //0 1 2 3 is the best number 3 4 5 6 7 8 9 10


for (let i = 1; i <= 10; i++) {  //F2 to change index into i
     console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
     //console.log(`inner loop value: ${j} and inner loop ${i}`);
     console.log(i + '*' + j + ' = ' + i*j );
     
    }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);                   //3
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


//*******Keywords****** */
//break and continue
for (let index = 1; index <= 20; index++) {
     if (index == 3) {
        console.log(`Detected 3`);
        break
     }
    console.log(`Value of i is ${index}`);
    
} //stops when detected

for (let index = 1; index <= 20; index++) {
     if (index == 3) {
        console.log(`Detected 3`);
        continue
     }
    console.log(`Value of i is ${index}`);
    
} //ignores the second command 