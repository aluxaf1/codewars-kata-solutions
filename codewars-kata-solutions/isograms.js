function isIsogram(str){
    return !/(.).*?\1/gi.test(str);
  }