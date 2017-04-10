// DNA Pairing

function pairElement(str) {
  var basePairs = {
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  };
  var arr = str.split('');
  arr = arr.map(function(val) {
    return [val, basePairs[val]];
  });
  return arr;
}

pairElement("GCG");

