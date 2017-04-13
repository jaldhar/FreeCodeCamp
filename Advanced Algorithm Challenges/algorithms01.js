// Validate US Telephone Numbers

function telephoneCheck(str) {
  // Good luck!

  // must begin with parentheses or whole number followed by parentheses
  if(!str.match(/^([\d\(])/)) {
    return false;
  }

  // take out everything except digits and parentheses
  var stripped = str.replace(/[^\d\(\)]/g, '');

  // reject if resulting number is too long or too short
  if (stripped.length < 10 || stripped.length > 13) {
    return false;
  }

  // if length is 12 or 13 we might have parentheses
  if (stripped.length > 11) {
    // parentheses must be balanced and contain area code
    var parens = stripped.match(/\((\d{3})\)/);
    if (parens === null) {
      return false;
    }
  }

  // if there is a single digit at the beginning (maybe preceded or
  // followed by an open parentheses) it is an international dialing
  // code.  Must be 1 for US.
  if ((stripped.length === 11 || stripped.length === 13) &&
  !stripped.match(/^(?:\(?1)|(?:1\(?)/) ) {
      return false;
  }

  return true;
}

telephoneCheck("-1 (757) 622-7382");

