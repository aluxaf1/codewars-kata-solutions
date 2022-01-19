function solution(number){
    let sum = 0;
    for (let x = 1; x < number; x++) {
      if ( x % 3 === 0 || x % 5 === 0) {
        sum += x ;
      }
    }
    return sum;
  }