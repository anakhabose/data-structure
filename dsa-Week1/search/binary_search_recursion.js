// Binary search using recursion

function recursiveBinarySearch(arr,target){
    
    return search(arr,target,0,arr.length-1);

}

function search(arr,target,leftIndex,rightIndex){

    if(leftIndex>rightIndex){
        return -1;
    }

    let midIndex = Math.floor((leftIndex+rightIndex)/2);

    if(target===arr[midIndex]){
        return midIndex;
    }

    if(target<arr[midIndex]){
        return search(arr,target,leftIndex,midIndex-1);
    }else{
        return search(arr,target,midIndex+1,rightIndex);
    }
}

console.log(recursiveBinarySearch([1.1, 1.5, 2.3, 3.6, 4.4, 5.8, 7.2, 8.5],4.4));

//Time complexity = O(log n)