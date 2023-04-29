function calculateTotal (subTotal, tax) {
   return subTotal + tax;
}
 
const person = {
    name: 'John',
    lastName: 'peters',
    age: 40,
    education: false,
    married: true,
    siblings: ['anna', 'joan', 'George'],
    greeting: function(){
        console.log('hello, my name is John')
    }
}
const age = person.age;
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();
