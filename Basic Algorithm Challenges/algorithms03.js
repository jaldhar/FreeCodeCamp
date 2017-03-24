// Check for Palindromes

function palindrome(str) {
  var arr = str.replace(/[^a-z\d]/gi, '').toLowerCase().split('');
  
  return arr.join('') === arr.reverse().join('');
}



palindrome("not a palindrome");
