
//Reverse words to their place using stack

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

function reverseWords(str){
    let result=[];
    let words = str.split(' '); 
    for(let word of words){
        let stack= new Stack();
        let reversed='';
        for(char of word){
            stack.push(char);
        }

        while(!stack.isEmpty()){
            reversed+=stack.pop();
        }
        result.push(reversed);

    }

    return result.join(' ');
}

console.log(reverseWords('hello world'));
