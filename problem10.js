function getPositiveNumbers(num){
  let number=[];
   for(let i=0;i<num.length;i++){
    if(num[i]>0){
        number.push(num[i]);
    }
   }
return number;

}

let arr= [2, -5, 10, -3, 8, -1, 0, 7]

console.log(getPositiveNumbers(arr));
