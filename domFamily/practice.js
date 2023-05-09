// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// document.getElementById('btn').style.color = 
// 'blue';
/*
select the element or group of elements that we want
Decide the effect we want to apply to the selection

getElementsByTagName('tagname');
HTMLCollection- array-like object
index, length property but not array methods(eg.forEach)

querySelectorAll(any css can be passed) in most cases
querySelector( any css) = for single items
NodeList - objects are collections of nodes
can run forEach
turn them into array - spread operator [....]
after that can use any array properties
*/

// const headings = document.getElementsByTagName('h1');
// headings[0].style.color = 'blue';
// console.log(headings.length);

// const items = document.getElementsByTagName('li');
// items[2].style.color ='red';

// const betterItems = [...items];

// betterItems.forEach(function(item){
//     console.log(item);
// });
// console.log(items);
// console.log(betterItems);

// const result = document.querySelector('#result');
// result.style.color = 'blue'

/* create element('')
   create Textnode('text content')
   element.appendChild(childElement) or
   insertBefore('element', 'location')
   replaceChild('new','old') can also be used...
   */
    
//    APPENDCHILD
//   const div = document.createElement('div');
//   const text = document.createTextNode('I am the best of my kind');
//   div.appendChild(text);
//   document.body.appendChild(div);

//   const result = document.querySelector('#result');
//   const heading = document.createElement('h1');
//   const headingText = document.createTextNode('I was created dynamically in a javaScript file..hurray! am the best');
//   heading.appendChild(headingText);
//   heading.classList.add('blue');
//   result.appendChild(heading);

// INSERTBEFORE
// const result = document.querySelector('#result');
// const list = document.querySelector('li');
// const heading = document.createElement('h1');
// const headingText = document.createTextNode('I was created dynamically in a javaScript file..hurray! am the best');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.insertBefore(heading, list);

// const div = document.createElement('div');
// const text = document.createTextNode('I am the best of my kind');
// div.appendChild(text);
// document.body.insertBefore(div,result);

// REPLACECHILD METHOD
// const div = document.createElement('div');
//   const text = document.createTextNode('I am the best of my kind');
//   div.appendChild(text);
//   document.body.replaceChild(div,result);

  /*
  Prepend
  innertext
   */
//   const heading = document.createElement('h2');
//   heading.innerText =`I am beautiful`;
//   document.body.prepend(heading);

// innerHTML
// textContent
const list = document.getElementById('first');
const div = document.getElementById('second');
console.log(list.innerHTML);
console.log(list.textContent);
console.log(div.textContent);

const ul = document.createElement('ul');
ul.innerHTML= ` <li class="item">eyes</li>
<li>nose</li/> <li>leg</li/> <li>hand</li/>`
document.body.appendChild(ul);

// div.textContent = 'hello people';
// div.innerHTML = 'hello world';




