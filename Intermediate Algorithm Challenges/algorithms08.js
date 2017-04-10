// Missing Letters

function fearNotLetter(str) {
  var missing = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== String.fromCharCode(missing)) {
      return String.fromCharCode(missing);
    }
    missing += 1;
  }
  return undefined;
}

fearNotLetter("abce");

