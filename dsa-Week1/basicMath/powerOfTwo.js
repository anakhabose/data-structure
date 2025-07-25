
function ifPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}

console.log(ifPowerOfTwo(1));
console.log(ifPowerOfTwo(8));
console.log(ifPowerOfTwo(5));

//Time complexity = O(log n)