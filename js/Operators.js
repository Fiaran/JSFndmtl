"use strict";

console.log('arr'+ " - object");
// console.log(4 + + " 5");

let incr = 10,
    decr = 10;

// ++incr; //if operotors is in end - postfix, when operator is in begin - prefix
// decr--;

console.log(++incr); //postfix from in output getting old data from variable
console.log(--decr);

console.log(5%2);

console.log(2+2*4 == '8');
//=== - строгое сравнение

//&&(and) ||(or)  !(not)

const isChecked = true,
    isCLose = false;

console.log(isChecked || !isCLose);