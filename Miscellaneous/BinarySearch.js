/*
    Write a program to implement Binary Search in Javascript
    The search function takes a sorted array(of numbers) as a input param and returns the index of the 
    given element if found in the array. Else returns -1.
    
    Examples: search([1,2,3,4,5,6],3) -> 2 
              search([1,2,3,4],7)  -> -1

    Edge Cases: - Check if the string is lowercase
                - Check if the string can only contain alphabets

    Input : <Array>, <Integer>
    Output: <Integer>
*/

function binarySearch(numbers, value) {
  if (!numbers.length) {
    console.log("The array cannot be empty.");
    return;
  }
  let min = 0;
  let max = numbers.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let midElement = numbers[mid];
    if (value == midElement) {
      return mid;
    }
    if (value > midElement) {
      min = mid + 1;
    } else if (value < midElement) {
      max = mid - 1;
    } else {
      return -1;
    }
  }

  return -1;
}

let result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);
