// Falsy Bouncer

function bouncer(arr) {
  arr = arr.filter(function(val) {
    return val;
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);