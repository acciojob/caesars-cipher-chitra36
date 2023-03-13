// Your Script here.
function rot13(str) {
var arr = [];
  for(var i = 0; i < str.length; i++){
    var code = 0;
    code = str.charCodeAt(i);
    if(code < 65){
      arr.push(String.fromCharCode(code));
    } else{
      code = code + 13;
      if(code > 90){
      code = code % 90 + 65 -1;
      arr.push(String.fromCharCode(code));
    }
      else{
      arr.push(String.fromCharCode(code));
    }
   }
}
  return arr.join("");
}