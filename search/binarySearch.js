
function binarySearch(arr,target){

    if(arr.length<1){
        console.log('Empty array');
        return;
    }
    
    let left = 0;
    let right = arr.length-1;
    let mid;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1;
}


console.log(binarySearch([1.1, 1.5, 2.3, 3.6, 4.4, 5.8, 7.2, 8.5],4.4));




