const firstName = ['anna','susy','bob'];
const lastName = 'shaker';
let newArray = [];

for(let i =0; i<firstName.length;i++){
    console.log(i);
    const fullName = `${firstName[i]} ${lastName}`
    newArray.push(fullName);

}
console.log(newArray);

const gas = [20, 40, 100, 30];
const food = [10, 40,50];

function calculateTotal (arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
       total += arr[i];
    }
    return total;
}
const foodTotal = calculateTotal(food);
const gasTotal = calculateTotal(gas);
const randomTotal = calculateTotal([200,400,30,20]);
console.log({
    food:foodTotal,
    gas:gasTotal,
    random:randomTotal,
});
console.log(window);

