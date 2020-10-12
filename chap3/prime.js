const min = 2;
const max = 10000000;
let count = 0;
const primes = [];

function generatePrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(i); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
      count++;
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time("prime");
generatePrimes(min, max);
console.timeEnd("prime");
console.log(primes.length);
console.log(count);
