/*
    Write a program to reverse a string in Javascript

    Examples: 'DEL'->'LED'
              'ANGEL'->'LEGNA'

    Edge Cases: - Check if the string is lowercase
                - Check if the string can only contain alphabets

    Input : <String>
    Output: <String>
*/

function stringReversal(string) {
  return string.split("").reverse().join("");
}

let strOne = stringReversal("DEL");
let strTwo = stringReversal("ANGEL");

console.log(strOne);
console.log(strTwo);
