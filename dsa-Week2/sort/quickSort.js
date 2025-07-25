
function quickSort(arr){

    if(arr.length<=1){
        return arr;
    }

    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}


let arr=[1,6,2,7,9,3];
console.log(quickSort(arr));

//Worst case - O(n^2)
//Average case - O(nlogn)