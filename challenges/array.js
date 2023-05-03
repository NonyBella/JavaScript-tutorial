// let fruits = ['banana', 'mango', 'orange', 10]
// let firstFruit = fruits[0];
// fruits[3]  = 'pear';
// console.log(firstFruit,fruits);

/* powerful array methods
reduce,map,forEach,filter..they automatically iterate over the array.
forEach doesn't  return a new array.*/

const person = [
    {person1:'jane',age:29, position: 'writer'},
    {person2:'jim',age:30, position: 'designer'},
    {person13:'mimi',age:28, position: 'developer'}
]


function showPerson(person){
    console.log(person.position.toUpperCase());
}
person.forEach(showPerson);
//  OR
person.forEach((function showPerson(item){
    console.log(item.position.toUpperCase()); 
}))
/* map method..it returns a new array, it does not change size of original arr

ay, uses values
from original array when making new */

const people = [
    {person1:'jane',age:29, position: 'writer'},
    {person1:'jim',age:30, position: 'designer'},
    {person1:'mimi',age:40, position: 'developer'}
]
const ages = people.map(function(human){
    return human.age + 20;
});

const newPeople = people.map(function(human){
    return {
        firstName:human.person1.toUpperCase(),
        oldage: human.age +40
    }
});
console.log(ages);
console.log(newPeople);
/* filter method returns a new array, can manipulate the size of new array, 
returns based on condition */

const youngPeople = people.filter((function(person){
      return person.age <= 29;
}));
console.log(youngPeople);
/*find method returns object, it returns first match , if no match it returns undefined,
it is great for getting unique value.
 */
const peoples = [
    {person1:'jane',age:29, position: 'writer'},
    {person1:'jim',age:30, position: 'designer'},
    {person1:'mimi',age:40, position: 'developer'},
    {person1:'onyi',age:25, position: 'nurse'}
]
const newPeoples = peoples.find((function(person){
    return person.position === 'developer'

}));
console.log(newPeoples);
/* reduce method
iterates, callback function; reduces to a single value-number, array, object
1parameter('acc')- total of all calculations
2parameter ('curr')- current iteration/value
 */

const anotherPeople = [
    {person1:'jane',age:29, position: 'writer', salary: 200},
    {person1:'jim',age:30, position: 'designer', salary: 700},
    {person1:'mimi',age:40, position: 'developer', salary: 1000},
    {person1:'onyi',age:25, position: 'nurse', salary: 500}
]
const total = anotherPeople.reduce(function(acc, currItem){
    console.log(`total ${acc}`);
    console.log(`current money : ${currItem.salary}`);
    acc += currItem.salary;
    return acc;
} ,0);
console.log(total
    );

