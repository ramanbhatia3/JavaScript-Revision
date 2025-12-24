// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

// Task 1: Array Filtering

// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
  return arr.filter(item => typeof item === 'number');
}

// console.log(filterNumbers([1,2,3,'a','s',9]))


// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
  return arr.reverse();
}

// console.log(reverseArray([1,2,3,'a','s',9]))

// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
  return Math.max(...arr);
}

// console.log(findMax([1,2,3,9]))

// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// console.log(removeDuplicates([1,2,6,4,3,9,4,3,2]))

// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array


function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1,2,6,4,3,9,4,3,2,[1,2,3],[12,3,[45,[5,6,7]]]]))