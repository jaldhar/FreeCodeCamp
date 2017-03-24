// Find the Longest Word in a String

function findLongestWord(str) {
  var words = str.split(/\s+/);
  var longest = 0;
  words.map(function(word) {
    if (word.length > longest) {
      longest = word.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
