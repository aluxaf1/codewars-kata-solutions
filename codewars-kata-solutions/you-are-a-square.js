var isSquare = function(n){
    for (let x = 0; x <= n; x++) {
    if (n === 0) {
      return true;
    } else if (n / x === x) {
      return true;
    }
  }
  return false;
}