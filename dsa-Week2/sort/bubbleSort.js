

function bubbleSort(arr){
   let n=arr.length;
   let swapped;
   do{
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped=true;
            }
        }
        n--;
   }while(swapped);
   return arr;
}

console.log(bubbleSort([1,6,3,4,8,19,2]))


// Big-O = O(n^2);