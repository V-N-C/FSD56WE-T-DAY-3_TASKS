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

  