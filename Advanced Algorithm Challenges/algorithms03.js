// Symmetric Difference


function sym() {
  return Array.from(arguments).reduce(function(prev, curr) {
    return prev.filter(function(val) {      // remove any from prev which are in curr
      return curr.indexOf(val) === -1;
    }).concat(curr.filter(function(val) {   // remove any from curr which are in prev and join to prev
      return prev.indexOf(val) === -1;
    })).filter(function(val, index, self) { // and remove any duplicates from prev
      return self.indexOf(val) === index;
    });
  }, []);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

