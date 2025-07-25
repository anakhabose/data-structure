

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

let stack = new Stack();
console.log(stack.pop());
stack.push(50);
stack.push(60);
stack.push(70);
stack.print();
stack.pop();
stack.print();
console.log(stack.size());
console.log(stack.peek());