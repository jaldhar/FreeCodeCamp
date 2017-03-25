// Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  var chars = str.split('');
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      chars[i] = String.fromCharCode(((str.charCodeAt(i) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    } else {
      chars[i] = str[i];
    }
  }
  return chars.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
