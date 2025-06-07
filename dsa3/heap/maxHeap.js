
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
            if(this.heap[parentIndex]>=this.heap[index]) break;
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];
            index=parentIndex;
        }
    }

    extractMax(){
        if(this.heap.length==0) return null;
        let max = this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown(){
        let length=this.heap.length;
        let index=0;
        while(true){
            let parentIndex = Math.floor((index-1)/2);
            let left = (2*index) + 1;
            let right = (2*index) + 2;
            let largest=index;
            if(left<length && this.heap[left]>this.heap[index]){
                largest=left;
            }
            if(right<length && this.heap[right]>this.heap[index]){
                largest=right;
            }
            if(largest==index) break;
            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]];
            index=largest;
        }
    }

    print(){
        console.log(this.heap);
    }
}

let heap = new Heap();
heap.insert(2);
heap.insert(5);
heap.insert(10);
heap.print();
console.log(heap.extractMax());
heap.print();