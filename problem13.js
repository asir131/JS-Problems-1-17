function findPrimeNumbers(n){
    if (n===1)
  {
    return;
  }
  else if(n === 2)
  {
    return n;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return;
      }
    }
    return n;  
  }
}

let arr=[2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2=[]
let arr3=[]
for(let i=0;i<arr.length;i++){
  arr2.push(findPrimeNumbers(arr[i]))
}
for(let i=0;i<arr2.length;i++){
 
    if(typeof arr2[i] === 'number'){
      arr3.push(arr2[i])
    }
}
console.log(arr3);