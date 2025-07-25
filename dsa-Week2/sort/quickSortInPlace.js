
function quicksort(arr,low=0,high=arr.length-1){

   if(low<high){
        let pivotIndex= partition(arr,low,high);
        quicksort(arr,low,pivotIndex-1);
        quicksort(arr,pivotIndex+1,high)
   }
   return arr;

}

function partition(arr,low,high){
    let pivot=arr[low];
    let i=low+1;
    let j=high;
    while(i<=j){
        
        while(i<=j && arr[i]<=pivot) i++;
        while(i<=j && arr[j]>pivot) j--;

        if(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }

    [arr[low],arr[j]]=[arr[j],arr[low]]
    return j;
  
}


console.log(quicksort([3,1,5,8,2,10]));