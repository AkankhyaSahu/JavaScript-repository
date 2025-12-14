const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batsman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batsman' ] ]
// console.log(marvel_heroes[3][1]); //flash

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batsman' ]

// const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batsman' ]

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


Array.isArray("Ak")
console.log(Array.isArray("Ak")) //false
console.log(Array.from("Ak")) //[ 'A', 'k' ]
console.log(Array.from({name: "Ak"})) //[] doesnot decide which one to convert key or vale

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2, score3)); 
//[ 100, 200, 300 ] returns new array
