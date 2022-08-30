// function pow(x, n){
//     let result = 1;

//     for( let i = 0; i< n; i++){
//         result *=x;
//     }
//     return result;
// }

// function pow(x, n){
//     if(n === 1){
//         return x;
//     }else{
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));

//Object.values()
function f2(){
    let out = '';
    for (let i = 1; i <= 30; i++){
        out += i + ' ';
    }
    console.log(out);
}
// f2();
let i =0;
let out = '';
function f3(){
    i++;
    out += i + ' ';
    if(i >= 30) return;
    f3();
}
// f3();
console.log(out);

function randomInteger(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let s1 = 0;
function moneyRecursion(){
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s1 += m;
    console.log('sum: ' + s1);
    if(s1 >= 300) return;
    moneyRecursion();
}

moneyRecursion();