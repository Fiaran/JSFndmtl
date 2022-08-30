"use strict";

function showFirstMessage(){
    console.log("Hello world!");
}

showFirstMessage();

function withParam(text){
    console.log(text);
}
withParam('asd');

function withVoid(){
    return 123;
}
let someNum = withVoid();
console.log(someNum);

const logger = function(){
    console.log("Hello");
};

console.log(logger);

const calc = (a,b) => a + b;

const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};