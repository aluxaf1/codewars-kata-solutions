function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var x = 0; x < string.length; x++){
         results[x] = string[x] * string[x];
     }
    return Number(results.join(''));
 }