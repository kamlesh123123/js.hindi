const marvel_heros = ["thor","ironman","spiderman"] 
const dc_heros = ["superman","batman","flash"] 

// marvel_heros.push(dc_heros)
// console.log(marver_heros)

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...all_heros]
// console.log(all_new_heros);

const another_array = [1,2,6,[4,5,8],4,8,[4,2,[4,5,[124,47] ] ] ]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("kamlesh"));
// console.log(Array.from("kamlesh"));

let score1 = 100
let score2 = 900
let score3 = 400

console.log(Array.of(score1,score2,score3));