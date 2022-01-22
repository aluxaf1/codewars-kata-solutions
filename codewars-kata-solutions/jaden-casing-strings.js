String.prototype.toJadenCase = function () {
    let str = this;
     let str2 = str[0].toUpperCase ();
     for(let i=1; i <= str.length-1; i++) {
       if(str[i-1] != " ") {
         str2 += str[i]
       }
       else{
         str2 += str[i].toUpperCase ();
       }
     }
     return str2
   }