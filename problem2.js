function CountPairs(str) {
  
  let count=0;
  for(let i=0;i<str.length;i+=2){
    

    if(typeof str[i] === 'string' && Number(str[i+1])%2==0){
      count++;
    }
 }
   
   return count
}

console.log(CountPairs("a1b2c3d4e5f6")); 
console.log(CountPairs("x1y2z3"));        
console.log(CountPairs("a2b2c2d2"));      
