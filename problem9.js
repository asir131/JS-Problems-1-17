function parseString(arr) {
    if(arr.every(element => typeof element === 'number')){
        let sum=0;
            for(let i=0;i<arr.length;i++){
                sum+=arr[i];
            }
            console.log(sum);
    }
    else 
      {myString = arr.join(' ');
      console.log(myString);
    }
    
}


let myArray = [21,24,40];
let myArray2=['Hello' , 'Alpha']
let myArray3=['Summer' , '2022']
parseString(myArray); 
parseString(myArray2);

parseString(myArray3);
