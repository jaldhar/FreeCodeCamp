// Mutations

function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toUpperCase().indexOf(arr[1][i].toUpperCase()) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);