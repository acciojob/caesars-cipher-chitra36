function rot13(str) { // LBH QVQ VG!

  return str.split("").map(b => {
        var num = 0;
        if (b.search(/[^a-zA-Z\d\s:]/g)) {
          
         return String.fromCharCode((b.charCodeAt() - 65 + 13) % 26 + 65);
        } else {
          return b;
        }
    }
  ).join("");


}


// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));