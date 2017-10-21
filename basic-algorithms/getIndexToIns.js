/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.*/

function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a-b).indexOf(num);
  
  // arr.push(num);
  // arr.sort((a, b) => a-b);
  // return arr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);
