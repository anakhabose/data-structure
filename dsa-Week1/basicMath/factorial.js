
function factorial(n){
    let result = 1;
    for(let i=2;i<=n;i++){
        result*=i;
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

//Time complexity = O(n);