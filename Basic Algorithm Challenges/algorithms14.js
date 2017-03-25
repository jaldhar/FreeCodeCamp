// Seek and Destroy

function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var myFilter = function(val){
    return val !== args[i];
  };
  for (var i = 1; i < arguments.length; i++) {
    arr = arr.filter(myFilter);
  }
  return arr;
}
                                                           
destroyer([1, 2, 3, 1, 2, 3], 2, 3);