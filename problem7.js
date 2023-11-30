function removeDuplicates(arr1){
  //   let unique=[];
  // for(let i=0;i<str.length;i++){
  //   if (!unique.includes(str[i])) {
  //       unique.push(str[i]); 
  //     }
  // }

  return [...new Set(arr1)];
}
let arr=["Zara", "Sadia" , "Mahin" , "Adnan" , "Maisha", "Adnan", "Faiyaz",'Sadia'];
console.log(removeDuplicates(arr));