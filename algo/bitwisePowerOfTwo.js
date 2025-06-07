

function isBitwisePowerOfTwo(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;
}

console.log(isBitwisePowerOfTwo(1));
console.log(isBitwisePowerOfTwo(8));
console.log(isBitwisePowerOfTwo(5));