// Where Art Thou

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var properties = Object.keys(source);
  var k = collection.length;
  var l = properties.length;
  for (var i = 0; i < k; i++) {
    var count = 0;
    for (var j = 0; j < l; j++) {
      var prop = properties[j];
      if (collection[i].hasOwnProperty(prop) && collection[i][prop] === source[prop]) {
        count++;
      }
    }
    if (count === properties.length) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
