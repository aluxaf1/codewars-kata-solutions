function sumTwoSmallestNumbers(numbers) {  
    let x = numbers
     .sort((a, b) => a - b)
     .slice(0, 2)
     .reduce((acc, cur) => acc + cur);
     
     return x;
   }