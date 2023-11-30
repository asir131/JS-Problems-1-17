// Task 1:
function fibonacci(n){
    let fibo=[0,1]

    for(let i=2;i<n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
        
    }
    return fibo;
}

console.log(fibonacci(8));
// ---------------------------------------------
// Task 2:

function isFibonacciNumber(number) {
    let a = 0, b = 1;
  
    while (b < number) {
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    if(b===number){
        return true;
    }
    else return false;
  }
  
  
  console.log(isFibonacciNumber(8)); 
  console.log(isFibonacciNumber(10)); 