function cube(x) {
  return x * x * x;
}

function square(x) {
  return x * x;
}

function isPrime(value) {
  let i = 2;

  for (; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

function print1to20() {
  /* eslint-disable no-console */
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  return true;
}

export { cube, square, isPrime, print1to20 };
