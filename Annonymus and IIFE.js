// Task:
// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times

// Solutions:

//Print odd numbers in an array
let array = [1,2,3,5];
let oddNumbers = function (arr) {
        return arr.filter(n => n % 2 === 1);
    }
console.log(oddNumbers(array));

//Convert all the strings to title caps in a string array
const names = ['one', 'two', 'three'];
const capitalizeNames = (peopleArray) => {
    return peopleArray.map((name) => {
      return name
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    });
  };
 const capitalizedNames = capitalizeNames(names);
console.log(capitalizedNames);

// Sum of all numbers in an array

const sum = [1, 2, 3, 4].reduce((a, b) => a + b, 0);
console.log(sum);

// Return all the prime numbers in an array
const navin = [4, 5, 6, 7].filter(num => num > 1 && Array.from({ length: Math.sqrt(num) }, (_, i) => i + 2).every(divisor => num % divisor !== 0));
console.log(navin);

// Return all the palindromes in an array
const palindromes = ['racecar', 'cecarar', 'honda'].filter(word => word === word.split('').reverse().join(''));
console.log(palindromes);

// Return median of two sorted arrays of the same size
const Array1 = [2, 4, 5];
const Array2 = [6, 7, 9];
const mergedArray = [...Array1, ...Array2].sort((a, b) => a - b);
const n = mergedArray.length;
const median = (mergedArray[Math.floor((n - 1) / 2)] + mergedArray[Math.ceil((n - 1) / 2)]) / 2;
console.log(`Median: ${median}`);

//Remove duplicates from an array
const ArrayRem = [2, 2, 4, 6, 7, 5, 5];
const uniqueArray = Array.from(new Set(ArrayRem));
console.log(uniqueArray);

//Rotate an array by k times
const ArrayInitial = [1, 2, 3, 4];
const k = 1;
const rotatedArray = ArrayInitial.slice(k).concat(ArrayInitial.slice(0, k));
console.log(rotatedArray); // Output: [2, 3, 4, 1]







  