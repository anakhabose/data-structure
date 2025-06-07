
class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()) return "Stack underflow";
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()) return "Stack underflow";
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

    print(){
        //console.log(this.items.join(' '))
        console.log(this.items.toString());
    }
}

function palindrome(str){

    let stack = new Stack();
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    for(let char of cleanedStr){
        stack.push(char);
    }

    for(let char of cleanedStr){
        if(stack.pop()!==char){
            return false;
        }
    }

    return true;
}

console.log(palindrome("racecar")); 
console.log(palindrome("hello"));   
console.log(palindrome("A man, a plan, a canal, Panama"));