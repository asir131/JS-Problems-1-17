function findShortestWord(str) {
    let arr=str.split(" ");
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
           if(arr[i].length>arr[j].length){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           }
        }
    }
    console.log(arr[0]);
}

 findShortestWord("The quick brown fox jumps over the lazy dog")
 findShortestWord("Hello world")
findShortestWord("Today is Monday")

