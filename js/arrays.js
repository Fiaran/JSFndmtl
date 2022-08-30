"use strict";

const arr = [1,2,3,6,10];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
// arr.pop(); //Удаление последнего элем. массива
// arr.push(10); // добавление новго элем в конец  массива
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(arr.length);

for(let value of arr){
    console.log(value);
}

const str = prompt("","");
const products = str.split("","");
console.log(products);
