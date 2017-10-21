// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
    return str.split(' ').sort((a,b) => b.length - a.length)[0].length;
}
  
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
