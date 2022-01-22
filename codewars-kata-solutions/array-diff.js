function arrayDiff(a, b) {
    for (var j = 0; j < a.length; j++) {
      for (var i = 0; i < b.length; i++) {
        if (a[j] == b[i]) {
          delete a[j];
        }
      }
    }
    return a.filter(Boolean);
  }