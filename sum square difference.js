// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sum = 0;

let sumOfSquares = 0;

for (let number = 1; number < 101; number++) {
  sumOfSquares += number ** 2;
  sum += number;
}

console.log(
  `the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is ${
    sum ** 2 - sumOfSquares
  }`
);
