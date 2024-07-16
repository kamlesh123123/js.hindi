const name = "kamlesh"
const repocount = 50

// console.log(name + repocount + "value"); b

// console.log(`hello my name is ${name} and my repocount is ${repocount} `);
 
const gameName = new String('kamleshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__); 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-5,-2)
// console.log(anotherString);

const newStringOne = "   kmalesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://kamlesh.com/kamlesh%20kumawat"
console.log(url.replace('%20', '-'));

console.log(url.includes('kaml'));
console.log(url.includes('sunard'));
