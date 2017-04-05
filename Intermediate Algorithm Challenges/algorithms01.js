// Sum All Numbers in a Range

function sumAll(arr) {
  var count = 0;
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  for (var i = start; i <= end; i++) {
    count += i;
  }
  return count;
}

sumAll([1, 4]);

