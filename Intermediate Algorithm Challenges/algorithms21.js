// Arguments Optional


function addTogether() {
  var args = arguments.length;
  if (args < 1 || args > 2) {
    return undefined;
  }

  for (var i = 0; i < args; i++) {
    if (arguments[i] + 0 !== arguments[i]) {
      return undefined;
    }
  }

  var result;

  if (args === 1) {
    var addend = arguments[0];
    result = function(val) {
      if (val + 0 !== val) {
        return undefined;
      }
      return val + addend;
    };
  } else {
    result = arguments[0] + arguments[1];
  }
  return result;
}

addTogether(2)(3);

