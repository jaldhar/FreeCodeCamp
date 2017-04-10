// Sum All Odd Fibonacci Numbers


function sumFibs(num) {
  var prev = 0;
  var fib = 0;
  var result = 0;

  while (true) {
    var oldfib = fib;
    if (prev + fib === 0) {
      fib = 1;
    } else {
      fib = prev + fib;
    }
    if (fib > num) {
      return result;
    }
    if (fib % 2 == 1) {
      result += fib;
    }
    prev = oldfib;
  }
}

sumFibs(75024);

