/*
    Write a function that accepts a sorted array of integers, and returns an array that has only unique values from the input.


    Examples: [1,1,2,2,3,3,3,4,4,4] -> [1,2,3,4]
              [1,2,3,3,5,7,8,8,9] -> [1,2,3,5,7,8,9]

    Edge Cases: - Check if this holds for for alphabets too ( can be solved by frequency counter in that case )
                - Check if the 

    Input : <Array[]>
    Output: <Array[]>
*/

function countUnique(numbers) {
  if (!numbers.length) {
    console.log("Array cannot be empty");
    return 0;
  }
  let left = 0;
  let right = left + 1;

  // Alternatively, we can just use left and then a for loop below for the same logic, loop counter would act as right counter
  while (right < numbers.length) {
    if (numbers[left] == numbers[right]) right++;
    else {
      debugger;
      left++;
      numbers[left] = numbers[right];
      right++;
    }
  }
  return left + 1;
}

let unique = countUnique([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5]);
console.log(unique);
