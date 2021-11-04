// TODO: check if word is validPalindrome
// racecar

// madam
// level
// radar
// rotor

function isValid(word) {
  let i = 0;
  let j = word.length-1;
  for(; i <= j; i++, j--) {
    console.log(`i: ${word[i]}, j: ${word[j]}`) 
    if (word[i] !== word[j]){
      console.log("Not a palindrome")
      return false;
    }
  }
  console.log("Valid palindrome")
  return true;
}

function whileIsValid(word) {
  let i = 0;
  let j = word.length-1;
  while (i <= j) {
    if (word[i] !== word[j]) {
      console.log("not valid")
      return false;
    } 
    i++;
    j--;
  }
  console.log("is valid")
  return true;
}

whileIsValid('radar');
// i
// R A C E C A R

function isPalindrome(word) {
  let rev = word.split("").reverse().join("");
  return rev == word ? true : false;
}

// console.log(isPalindrome('radasr'));