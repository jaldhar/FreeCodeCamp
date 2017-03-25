// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var slices = [];
  while (arr.length > 0) {
    var aSlice = arr.slice(0, size);
    arr = arr.slice(size);
    slices.push(aSlice);
  }
  return slices;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
