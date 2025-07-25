//Give a number n , find the nth element of the Fibonacci sequence

function recursiveFibonacci(n){
    
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);

}


console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(6));

//Time complexity = O(2^n)
//Tree grows exponentially

/*
                        fib(5)
                       /      \
                  fib(4)      fib(3)               - 2^1
                 /     \      /     \
           fib(3)  fib(2)  fib(2)  fib(1)          - 2^2
          /   \     /         \
    fib(2) fib(1) fib(1)     fib(0)
    /         
fib(1)
*/
