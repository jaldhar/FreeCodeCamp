// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];

  // Same, same; but different.
  var myFilter = function(val) {
    return val !== arr1[i];
  };

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
    } else {
      arr2 = arr2.filter(myFilter);
    }
  }
  newArr = newArr.concat(arr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

