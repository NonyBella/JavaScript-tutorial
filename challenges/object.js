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

const car = {
    make: 'volkswagon',
    model: 2020,
    year: 2023,
    colors: ['blue','black', 'red'],
    hybrid: true,
    drive: function(){
        console.log('teaching how to drive')
    },
    // line 24 and 25 are the same. both are mthods added to the object.
    stop(){
        console.log('do you know how to stop the car abruptly')
},
}
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop()