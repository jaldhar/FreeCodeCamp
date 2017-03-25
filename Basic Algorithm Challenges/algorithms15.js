// Where do I Belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a, b) {
    return a > b;
  });
  var index = 0;
  while (num > arr[index]) {
    index++;
  }
  return index;
}

getIndexToIns([5, 3, 20, 3], 5);