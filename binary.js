


let arr=[1, 3, 5, 7, 9]
target = 7

function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(target===arr[mid]){
            return mid;
        }else if(target<arr[mid]){
            
            right=mid-1;
           
        }else{
            left=mid+1;
        }
    } 
   return -1;
}

console.log(binarySearch(arr,target));