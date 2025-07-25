//In place conversion of max heap to min heap


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
function maxToMin(maxHeap) {
    
    maxHeap.heapifyDown = function () {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    };

   
    for (let i = Math.floor(maxHeap.heap.length / 2); i >= 0; i--) {
        maxHeap.heapifyDown();
    }
}

// let heap = new Heap();
// heap.insert(15);
// heap.insert(5);
// heap.insert(10);
// heap.insert(1);

// console.log("Max Heap:"); // [15, 5, 10, 1]
// heap.print();

// maxToMin(heap);
// console.log("Min Heap (In-Place):"); // [1, 5, 10, 15]
// heap.print()

let heap = new Heap();
heap.insert(1);
heap.insert(7);
heap.insert(6);
heap.insert(5);
heap.insert(8);
heap.insert(3);
heap.print();

maxToMin(heap);
heap.print()

//Not - in place conversion


// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     extractMax() {
//         if (this.heap.length === 0) return null;
//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return max;
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[parentIndex] >= this.heap[index]) break;
//             [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//             index = parentIndex;
//         }
//     }

//     heapifyDown() {
//         let index = 0;
//         const length = this.heap.length;
//         while (true) {
//             let leftChild = 2 * index + 1;
//             let rightChild = 2 * index + 2;
//             let largest = index;

//             if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
//                 largest = leftChild;
//             }
//             if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
//                 largest = rightChild;
//             }
//             if (largest === index) break;
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//             index = largest;
//         }
//     }
// }

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     extractMin() {
//         if (this.heap.length === 0) return null;
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return min;
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[parentIndex] <= this.heap[index]) break;
//             [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//             index = parentIndex;
//         }
//     }

//     heapifyDown() {
//         let index = 0;
//         const length = this.heap.length;
//         while (true) {
//             let leftChild = 2 * index + 1;
//             let rightChild = 2 * index + 2;
//             let smallest = index;

//             if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
//                 smallest = leftChild;
//             }
//             if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
//                 smallest = rightChild;
//             }
//             if (smallest === index) break;
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             index = smallest;
//         }
//     }
//     print(){
//         console.log(this.heap);
//     }
// }

// // Function to convert Max Heap to Min Heap
// function convertMaxHeapToMinHeap(maxHeap) {
//     const minHeap = new MinHeap();

//     // Extract all elements from the max heap and insert into the min heap
//     while (maxHeap.heap.length > 0) {
//         const value = maxHeap.extractMax();
//         minHeap.insert(value);
//     }

//     return minHeap;
// }

// Example usage
// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(5);
// maxHeap.insert(15);
// maxHeap.insert(1);

// console.log("Max Heap:", maxHeap.heap); // [15, 5, 10, 1]

// const minHeap = convertMaxHeapToMinHeap(maxHeap);
// console.log("Min Heap:", minHeap.print()); // [1, 5, 10, 15]
