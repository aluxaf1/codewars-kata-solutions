function getSum( a,b ) {
    if(a===b){
    return a;
    }
    var result = 0;
    var x = a, y = b;
    if(a > b) {
       x = b, y = a;
    }
    for(var i = x; i <=y; i++ ) {
      result += i;
    }
    return result;
 }