// Truncate a string

function truncateString(str, num) {
  var ellipses = '...';
  if (num >= str.length) {
    num = str.length;
    ellipses = '';
  } else if (num > 3) {
    num -= 3;
  }
  return str.slice(0, num) + ellipses;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);