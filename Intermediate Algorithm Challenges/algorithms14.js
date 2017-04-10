// Sum All Primes

function sumPrimes(num) {
  var primes = [];
  for (var i = 2; i <= num; i++) {
    var divisors = 0;
    var isPrime = true;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors++;
      }
      if (divisors > 2) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  var result = 0;
  primes.map(function(val){
    result += val;
  });
  return result;
}

sumPrimes(10);

