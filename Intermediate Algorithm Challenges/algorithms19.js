// Binary Agents


function binaryAgent(str) {
  var chars = str.split(' ');
  for (var i = 0; i < chars.length; i++) {
    var code = 0;
    for (var j = 0; j < chars[i].length; j++) {
      if (chars[i][j] === '1') {
        code += Math.pow(2, 7 - j);
      }
    }
    chars[i] = String.fromCharCode(code);
  }
  return chars.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

