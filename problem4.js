function isPalindrome(str){
    let arr=[];
    
    
    for(let i=str.length-1;i>=0;i--){
        arr=arr+str[i]
        }
    if(arr==str){
        return true;
    }
    else 
    return false;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("peep"));