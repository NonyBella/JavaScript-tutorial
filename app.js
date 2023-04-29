// while loop
let amount =10;

while (amount>0){
    console.log( 'you have ' + amount + ' dollars left')
    amount--;

}
// do while loop 
let money = 0
do{
    console.log('you have ' + money + ' dollars left');
    money++;
}
while(money < 10);
// string properties and methods
let text = 'Miriam Anthony';

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
// to get last character
console.log(text.charAt(text.length-1));
console.log(text.indexOf('r'));
console.log(text.indexOf('r'));
console.log(text);
console.log(text.trim());
console.log(text.startsWith('Mi'));
console.log(text.trim().toLowerCase().startsWith('miriam'));
console.log(text.includes('tony'));
console.log(text.slice(0,5));
// we can get the end of the string by passing negative values
console.log(text.slice(-1));
console.log(text.slice(-2));

// -1 ll give the last number in the string while -2 ll give the 
// last two numbers, same with -3...on and on




