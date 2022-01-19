function accum(s) {
    return (s.split('').map((z, x)=>{
      var res = z.toUpperCase(); 
      for(var c = 1 ; c <= x ; c++) {
        res += z.toLowerCase();
      }
      return res;
    }).join('-'));
  }