
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0;
    }

    enqueue(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.front=this.rear=node;
        }else{
            this.rear.next=node;
            this.rear=node;

        }
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        let removedNode=this.front.data;
        this.front=this.front.next;
        if(!this.front){
            this.rear=null;
        }
        this.length--;
        return removedNode;
    }

    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        return this.isEmpty()? 'Queue is empty':this.front.data;
    }

    isEmpty(){
        return this.length===0;
    }

    size(){
        return this.length;
    }

    print(){
        let current=this.front;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join('->'));
    }
}

let queue = new Queue();
queue.enqueue(30);
queue.enqueue(20);
queue.enqueue(10);
queue.print();
queue.dequeue(10);
queue.print();
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek())