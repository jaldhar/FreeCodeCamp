// Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(function(curr) {
    return {
      name: curr.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(curr.avgAlt + earthRadius, 3) / GM)),
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

