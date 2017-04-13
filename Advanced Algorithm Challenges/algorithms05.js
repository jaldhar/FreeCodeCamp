// Inventory Update


function updateInventory(arr1, arr2) {
  var updatedInv = {};
  arr1.forEach(function(val) {
    updatedInv[val[1]] = val[0];
  });

  arr2.forEach(function(val) {
    if (updatedInv.hasOwnProperty(val[1])) {
      updatedInv[val[1]] += val[0];
    } else {
      updatedInv[val[1]] = val[0];
    }
  });

  // All inventory must be accounted for or you're fired!
  var result = [];
  Object.keys(updatedInv).forEach(function(curr) {
    result.push([updatedInv[curr], curr]);
  });
  return result.sort(function(a, b) {
    return a[1] > b[1];
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

