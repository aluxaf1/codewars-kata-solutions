function DNAStrand(dna){
    let trad = "";
    for (let i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case "A":
        trad += "T";
        break;
        case "T":
        trad += "A";
        break;
        case "G":
        trad += "C";
        break;
        case "C":
        trad += "G";
        break;
      }
    }
    return trad;
  }