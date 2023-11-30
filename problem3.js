function reverseString(str){
    let arr=[];
    
    
    for(let i=str.length-1;i>=0;i--){
        arr=arr+str[i]
        }
    return arr
    
}

console.log(reverseString('hello'));
console.log(reverseString('racecar'));
console.log(reverseString('12345'));
