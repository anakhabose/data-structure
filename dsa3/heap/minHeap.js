
class Heap{
    constructor(){
        this.heap=[];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex]<=this.heap[index]) break;
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];
            index=parentIndex;
        }
    }

    extractMin(){
        if(this.heap.length==0) return null;
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown(){
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = (2*index)+1;
            let right = (2*index)+2;
            let smallest=index;
            if(left<length && this.heap[left]<this.heap[smallest]){
                smallest=left;
            }
            if(right<length && this.heap[right]<this.heap[smallest]){
                smallest=right;
            }
            if(smallest==index) break;
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]];
            index=smallest;
        }
    }

    print(){
        console.log(this.heap);
    }
}

let heap = new Heap();
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.print();
console.log(heap.extractMin());;
heap.print();