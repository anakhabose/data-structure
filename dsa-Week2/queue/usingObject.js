

class Queue{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }

    enqueue(element){
        this.items[this.rear]=element;
        this.rear++;
    }

    dequeue(){

        if(this.isEmpty()){
            return 'Queue is empty';
        }
        let removedItem=this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return removedItem;
    }

    peek(){
        
        return this.isEmpty()? 'Queue is empty':this.items[this.front];
    }

    isEmpty(){
        return this.front===this.rear;
    }

    size(){
        return this.rear-this.front;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return
        }
        console.log(this.items);
    }
}

let queue = new Queue();
queue.enqueue(30);
queue.enqueue(20);
queue.enqueue(10);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size())