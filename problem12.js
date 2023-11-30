function getMaxProduct(arr){
    if (arr.length < 2) {
        return undefined;
    }
   let sorted=arr.sort();
   
   let result=sorted[sorted.length-1]*sorted[sorted.length-2]
   
   return result;

}

let arr=[2, 3, 5, 6, 7]

console.log(getMaxProduct(arr));