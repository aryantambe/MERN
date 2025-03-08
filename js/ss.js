function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
      let output=[];
      let nextTerm=0;
      if(n==0){
         return output=[];
      }
      else if(n==1){
         return output=[0];
      }
      else if(n===2){
       return output=[0,1];
      }
      else{
        output=[0,1]
          for(var i=2;i<n;i++)
          {
              nextTerm=output[i-1]+output[i-2];
              output.push(nextTerm);
          }
          return output;
      }  
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    output=fibonacciGenerator(15)
    console.log(output)
    
    