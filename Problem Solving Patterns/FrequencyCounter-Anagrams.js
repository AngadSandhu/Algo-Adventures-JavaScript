/*
    Implement a function that takes 2 strings as input params and check if they are anagrams.
*/

function anagram(first, second) {
  if (first.length !== second.length) {
    console.log("Both Strings must be of equal length");
    return;
  }
  let frequencyMap = {}; // Creating an object to store the letters in the first string and its number of occurences
  // Looping throught the first string and storing the frequency of letters in the map object
  for (let i = 0; i < first.length; i++) {
    frequencyMap[`${first[i]}`]
      ? (frequencyMap[`${first[i]}`] += 1)
      : (frequencyMap[`${first[i]}`] = 1);
  }
  // Looping through the second string
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!frequencyMap[letter]) {
      console.log(`Letter: ${letter} does not exist in the first string`);
      return;
    } else {
      frequencyMap[letter]--;
    }
  }
  console.log("Hooray ! Both the strings match !!!");
}

let one = anagram("honda", "adohn");
let two = anagram("bile", "nile");
console.log(one);
console.log(two);
