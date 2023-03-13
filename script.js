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
