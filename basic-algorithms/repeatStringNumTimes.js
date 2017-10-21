/*Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
   return num > 0 ? str.repeat(num) : '';
}

/*function repeatStringNumTimes(str, num) {
  var newStr = '';
  for(var i=0; i<num; i++){
    newStr+=str;
  }
  return newStr;
}*/

repeatStringNumTimes("*", 8);
