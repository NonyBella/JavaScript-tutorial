// // while loop
// let amount =10;

// while (amount>0){
//     console.log( 'you have ' + amount + ' dollars left')
//     amount--;

// }
// // do while loop 
// let money = 0
// do{
//     console.log('you have ' + money + ' dollars left');
//     money++;
// }
// while(money < 10);
// // string properties and methods
// let text = 'Miriam Anthony';

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// // to get last character
// console.log(text.charAt(text.length-1));
// console.log(text.indexOf('r'));
// console.log(text.indexOf('r'));
// console.log(text);
// console.log(text.trim());
// console.log(text.startsWith('Mi'));
// console.log(text.trim().toLowerCase().startsWith('miriam'));
// console.log(text.includes('tony'));
// console.log(text.slice(0,5));
// // we can get the end of the string by passing negative values
// console.log(text.slice(-1));
// console.log(text.slice(-2));

// // -1 ll give the last number in the string while -2 ll give the 
// // last two numbers, same with -3...on and on


// TEMPLATE LITERAL
// const lady = 'mimi';
// const age = 22; 
// const value = `Hey it's ${lady} and I am a ${age} years baby gal.
// And here is some simple maths ${4+4},`
// console.log(value);

// Array properties and methods

let names = ['John','bobo','barry','juan']
// length
console.log(names.length);
console.log(names.length-1);
// concat
const lastName = ['pepper','onion','banana'];
const allNames = names.concat(lastName);
console.log(allNames);
// reverse
console.log(allNames.reverse());
// unshift
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);
// shift(removes items starting from index zero)
allNames.shift()
allNames.shift()
console.log(allNames);
// push
allNames.push('mikel');
console.log(allNames);
// pop (removes items starting from the last item in the array )

allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);
// splice - mutates original array
const specificNames = allNames.splice(2,1);
console.log(specificName);