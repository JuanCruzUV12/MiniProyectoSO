export function cpuStress() {

  let iterations = 0;

  // PRIMOS

  for (let i = 2; i < 50000; i++) {

    let prime = true;

    for (let j = 2; j * j <= i; j++) {

      if (i % j === 0) {
        prime = false;
        break;
      }

      iterations++;
    }
  }

  // FIBONACCI

  function fib(n:number):number {

    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
  }

  fib(25);

  // ORDENAMIENTO

  const arr = Array.from(
    { length: 20000 },
    () => Math.random()
  );

  arr.sort();

  return iterations;
}

