// Task
// Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array

// Solutions:
// Print odd numbers in an array using arrow functions

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = arr.filter(n => n % 2 === 1);
console.log(oddNumbers);

// Convert all the string's to first letter into caps in an array using arrow functions
let numbers =['one','two','three','four'];
const titleCaps = numbers.map(n => n[0].toUpperCase() + n.slice(1));
console.log(titleCaps);

// Sum of all numbers in an array using arrow functions

const sum = arr.reduce((a, b) => a + b);
console.log(sum);

// Return all the prime numbers in an array using arrow functions

const primeNumber = ['141','273','2014','3']
const primeNumbers = primeNumber.filter(n => n % 2 === 1);
console.log(primeNumbers);

// Return all the palindromes in an array using arrow functions

const palindromes = ['racecar','tamil','banana', 'mom']
const palindrome = palindromes.filter(n => n === n.split('').reverse().join(''));
console.log(palindrome);




