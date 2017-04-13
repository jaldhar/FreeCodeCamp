// Pairwise

function pairwise(arr, arg) {
  return arr.reduce(function(prev, curr, idx, self) {
    var i = idx + 1;
    while (i < self.length) {
      if (self[i] !== undefined && curr + self[i] === arg) {
        prev += idx + i;
        self[i] = undefined;
        break;
      }
      i++;
    }
    return prev;
  }, 0);
}

pairwise([1,1,1], 2);

