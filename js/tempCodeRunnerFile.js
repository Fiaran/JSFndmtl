function pow(x, n){
    let result = 1;

    for( let i = 0; i< n; i++){
        result *=x;
        console.log("x:"+x);
        console.log("n:"+n);
    }
    return result;
}

function pow(x, n){
    if(n === 1){
        return x;
    }else{
        return x * pow(x, n - 1);
    }
}


console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));