
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

function reverse(str){
    let stack= new Stack();

    for(let char of str){
        stack.push(char);
    }

    let reverseStr='';

    while(!stack.isEmpty()){
        reverseStr+=stack.pop();
    }

    return reverseStr;
}

console.log(reverse('helloworld'));
