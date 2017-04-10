// Smallest Common Multiple

function smallestCommons(arr) {
  arr = arr.sort(function(a, b) {
    return a > b;
  });

  var max = arr[1];
  var lcd = max;
  while (max > arr[0]) {
    var step = lcd;
    while (lcd % (max - 1) !== 0) {
      lcd += step;
    }
    max--;
  }
  return lcd;
}


smallestCommons([7,9]);

