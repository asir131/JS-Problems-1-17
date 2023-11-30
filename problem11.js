function findMissingNumber(num){
    
   let num1=num[0];
   let missing=[];
   for(let i=0;i<num.length;i++){
      if(num[i]!=num1){
        missing.push(num1)
        i=i-1;
      }
      num1=num1+1;
   }
   return missing
}

let arr= [1, 2, 3, 5, 6, 7, 8];
console.log(findMissingNumber(arr));