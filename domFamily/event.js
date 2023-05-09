/*
core principles of event listener
select element
addEventListener()
what event, what to do
 */
// const btn = document.querySelector('.button');
// const heading = document.querySelector('h2');

// btn.addEventListener('click',function (){
//     heading.classList.add('red');
//     //this simply means that on clicking the button, the h2 element should change to red
// })

// Another example(passing function as a reference)

// function changeColors(){
// let hasClass = heading.classList.contains('red');
// if(hasClass){
//     heading.classList.remove('red');
// }
// else{heading.classList.add('red')};
// }
// btn.addEventListener('click',changeColors);
/*
click -fires after full action occurs
mousedown - button is pressed
mouseup - button is released
mouseenter -moved onto an element
mouseleave -moved out of an element
*/
// const headingOne = document.querySelector('h1');
// const button = document.querySelector('.classy');

// button.addEventListener('click',function(){
//    console.log('you clicked me'); 
// })
// button.addEventListener('mousedown',function(){
//     console.log('down'); 
// })
// button.addEventListener('mouseup',function(){
//     console.log('up'); 
// })
// button.addEventListener('mouseenter',function(){
//    heading.classList.add('blue') 
// })
// button.addEventListener('mouseleave',function(){
//     heading.classList.remove('blue') 
//  })
 /*
 key events
    keypress - when key is pressed
    keydown - when key is down
    keyup - when key is released
  */
//  const input = document.getElementById('name');
//  input.addEventListener('keypress', function(){
//     console.log('you pressed a key');   
//  }) 
//  input.addEventListener('keydown', function(){
//     console.log(input.value);   
//  })
 
 /*
 event object argument e, evt
 info about triggered event
 event.type
 event.currentTarget
 this keyword
 preventDefault() -prevents default behaviour
  */
 //use h1 instead of 
//  i don tire...thanks man
//  const headingTwo = document.querySelector('h1');
//  const lastButton = document.querySelector('.lastBtn');
//  const link = document.getElementById('link');

//  headingTwo.addEventListener('click', function(){
//      headingTwo.classList.add('blue');
//  })
//  headingTwo.addEventListener('click', function(event){
//    event.currentTarget.classList.add('blue');
// })

// link.addEventListener('click',function(e){
//    e.preventDefault();
// })
/*
currentTarget- always refers to the element to which the event handler has been attached to
target - identifies the element on which the event occured

 */

// btns = document.querySelectorAll('.btn')
// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e){
//    //   e.currentTarget.style.backgroundColor = 'blue';
//    e.target.style.backgroundColor = 'blue'
//   })
// })
/* Bubbling -Capturing
allows us select dynamic elements
event propagation - order the events are fired
event bubbling - clicked element first then bubbles up -default
event capturing - fires at the root and fires until it reaches target
 */
// const container =document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e){
//    console.log('current target', e.currentTarget)
//    console.log('target', e.target)
// }
// function stopPropagation(e){
//    console.log('you clicked me');
//    e.stopPropagation();
// }
// list.addEventListener('click',stopPropagation, {capture:true});
// container.addEventListener('click',showBubbling, {capture:true});

/*forms
submit event listener
prevent default
how to get a value
 */

form = document.getElementById('form');
nameInput= document.getElementById('name');
password = document.getElementById('password');

form.addEventListener('submit', function(e){
   e.preventDefault();
   console.log('i ve submitted');
   console.log(nameInput.value);
   console.log(password.value);
})

/*
web storage API -provided by browser
session storage, local storage
they both use the following methods
setItem, getItem, removeItem, clear
 */
localStorage.setItem('name', 'John');
sessionStorage.setItem('name', 'John');
 
//JSON.stringify(), JSON.parse()
const friends = ['john', 'mikel','zinny'];
localStorage.setItem('friends',JSON.stringify(friends));
let value = JSON.parse(localStorage.getItem('friends'));
console.log(value [0]);

/* 
setTimeout- runs function once after specific time
pass function reference
duration in ms(1000ms=1s)
default 0,will cover more extensively in async/await section
the clearTimeout uses a unique identifier
on window object
clearTimeout() 
 */

function sayHello(){
   console.log('hello pretty');
}
setTimeout(sayHello,2000)
// OR
setTimeout(function(){
   console.log('hi dear');
},2000);

function showScore(name,score){
 console.log(`hello ${name}, your score is ${score}`);
}
setTimeout(showScore,1000,'Juan',100);  

// setInterval=runs function repeatedly, at specific intervals...everything is the same as setTimeout 

/*
the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting 
for stylesheets, images, and subframes to finish loading.

 */