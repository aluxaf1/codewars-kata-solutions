function getMiddle(s) {
    let len = s.length;
      if (len % 2) {
        return s[(len - 1) / 2];
      } else {
        return s[len / 2 - 1] + s[len / 2];
      }
    }