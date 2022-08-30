'use strict';

const box = document.getElementById('box');
// console.log(box);
const btns = document.getElementsByTagName('button');
// console.log(btns[0]);
const circles = document.getElementsByClassName('circle');
// console.log(circles);
const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });
const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
const wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width:500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
const div = document.createElement('div');
// const text = document.createTextNode('Tut byl ya');
div.classList.add('black');
// document.body.append(div);
 wrapper.appendChild(div);
// wrapper.prepend(div); //вставляет элем. в начало.

// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);
// wrapper.insertBefore(div, hearts[1]);
// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello, world!</h1>';

// div.textContent = 'Hello, world!';
div.insertAdjacentHTML('beforeend','<h2>Hello</h2>');
//beforebegin - enter element before
//afterbegin, beforeend, aftereend

