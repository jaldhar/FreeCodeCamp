// Steamroller


function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (result, val) {
    if (Array.isArray(val)) {
      return result.concat(steamrollArray(val));
    } else {
      return result.concat(val);
    }
  }, []);
}

steamrollArray([1, [2], [3, [[4]]] ]);
