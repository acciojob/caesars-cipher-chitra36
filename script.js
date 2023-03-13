function isCapLetter(num) {
  if (num >= 65 && num <= 90) {
    return true;
  }
  return false;

}

function range(num, min, max) {
  if (num >= min && num <= max) {
    return num;
  } else {
    return num - max + min - 1;
  }
}

//102 ---> 76
range(100, 65, 90);

//65-90

function rot13(str) { // LBH QVQ VG!

  str = str.toUpperCase();
  var n = 0;
  var l = "";
  var str2 = "";

  for (x = 0; x < str.length; x++) {
    n = str.charCodeAt(x);
    if (isCapLetter(n)) {
      n = range(n + 13, 65, 90);
    }
    l = String.fromCharCode(n);
    str2 += l;
  }
  return str2;
}

// Change the inputs below to test
rot13("serR PBQR PNZC");