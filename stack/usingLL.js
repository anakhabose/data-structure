
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.length=0;
    }

    push(data){
        let node = new Node(data);
        node.next=this.top;
        this.top=node;
        this.length++;
    }

    pop(){
        if(!this.top) return 'Stack underflow';
        let removedNode=this.top;
        this.top=this.top.next;
        this.length--;
        return removedNode.data;
    }

    peek(){
        return this.top? this.top.data:'stack underflow';
    }

    isEmpty(){
        return this.length==0;
    }

    size(){
        return this.length;
    }

    print(){
        let result=[];
        let current=this.top;
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join(' -> '));
    }
}

let stack = new Stack();
console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.pop())
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek())