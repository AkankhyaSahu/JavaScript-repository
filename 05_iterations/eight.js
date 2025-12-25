//*******REDUCE*** */ acc: accumulator
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval 
}, 0)

console.log(myTotal);
//acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6


//**in form of arrow function */
//const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "web dev",
        price: 999
    },
    {
        itemName: "Python",
        price: 699
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay) //2697