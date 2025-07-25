



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

function validParantheses(s){
    let stack = new Stack();
    let pairs = { ')':'(', ']':'[', '}':'{'};
    for(let char of s){
        if(char==='(' || char==='[' || char==='{'){
            stack.push(char);
        }else if(char in pairs){
            if(stack.isEmpty() || stack.pop()!==pairs[char]){
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(validParantheses('({[]})'));
