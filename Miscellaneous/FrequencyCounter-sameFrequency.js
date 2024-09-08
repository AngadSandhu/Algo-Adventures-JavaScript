function sameFrequency(numA, numB) {
  let first = numA.toString();
  let second = numB.toString();
  if (first.length < 0 || second.length < 0) {
    console.log("Numbers cannot be empty");
    return;
  }

  let numberMap = {};
  for (let i = 0; i < first.length; i++) {
    numberMap[`${first[i]}`] ? (numberMap[`${first[i]}`] += 1) : (numberMap[`${first[i]}`] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let key = second[i];
    if (numberMap[key] == 0) {
      console.log("The digit is missing");
      delete numberMap[key];
    }
    if (!(key in numberMap)) {
      console.log(`Bruh! The digit ${second[i]} is missing from the first number`);
      return;
    } else {
      numberMap[key]--;
    }
  }
  console.log("The digits in both the numbers matches!");
}

let a = sameFrequency(182, 281);
let b = sameFrequency(34, 14);
