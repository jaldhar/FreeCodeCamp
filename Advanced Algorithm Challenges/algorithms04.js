// Exact Change

function checkCashRegister(price, cash, cid) {
  // Make all numbers integer only until output.  These
  // contortions are needed to stop floating point rounding errors
  cash *= 100;
  price *= 100;

  // For completeness; not part of the spec.
  if (cash < price) {
    return "Get lost deadbeat!";
  }
  var totalChange = cash - price;

  var cidLookup = {};
  cid.map(function(val) {
    cidLookup[val[0]] = val[1] * 100;
  });

  var amountLookup = {
    'ONE HUNDRED':  10000,
    'TWENTY':        2000,
    'TEN':           1000,
    'FIVE':           500,
    'ONE':            100,
    'QUARTER':        25,
    'DIME':           10,
    'NICKEL':         5,
    'PENNY':          1
  };

  var change = [];
  Object.keys(amountLookup).map(function(curr) {
    var subtotal = 0;
    var amount = amountLookup[curr];
    while (totalChange >= amount && cidLookup[curr] >= amount) {
      totalChange -= amount;
      cidLookup[curr] -= amount;
      subtotal += amount;
    }
    if (subtotal > 0) {
      change.push([curr, subtotal / 100]);
    }
  }, []);

  if (totalChange > 0) {
    return "Insufficient Funds";
  }

  if (Object.keys(cidLookup).reduce(function(prev, curr) { return prev += cidLookup[curr]; }, 0) === 0) {
    return "Closed";
  }

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
