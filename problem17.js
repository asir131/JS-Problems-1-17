function findMedian(arr){
    let sum=0;
     for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
     }
     return sum/arr.length;
}

let arr1=[5, 2, 8, 1, 9];
let arr2= [4, 2, 7, 1, 9, 10];

console.log(findMedian(arr1));
console.log(findMedian(arr2));