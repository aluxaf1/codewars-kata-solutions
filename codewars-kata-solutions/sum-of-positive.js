function positiveSum(arr) {
    var total = 0;    
    for (s = 0; s < arr.length; s++) {
      if (arr[s] > 0) {
        total += arr[s];
      }
    }
    return total;   
  }