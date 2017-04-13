// No Repeats Please

function permAlone(str) {
  var perms = [];
  var usedChars = [];

  var permute = function(input) {
    var chars = input.split("");

    for (var i = 0; i < chars.length; i++) {
      var char = chars.splice(i, 1);
      usedChars.push(char);
      if (chars.length === 0) {
        perms[perms.length] = usedChars.join("");
      }
      permute(chars.join(""));
      chars.splice(i, 0, char);
      usedChars.pop();
    }

    return perms;
  };

  return permute(str).filter(function(val) {
    return !val.match(/(.)\1/);
  }).length;
}

permAlone('aab');

