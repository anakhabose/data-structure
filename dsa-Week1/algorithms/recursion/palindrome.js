
//check the given string is palindrome or not

function isPalindrome(str,left=0,right=str.length-1){

    if(left>=right){
        return true;
    }

    if(str[left]!==str[right]){
        return false;
    }

    return isPalindrome(str,left+1,right-1);
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('madam'));

//Time complexity = O(n)