function isPalindrome(word) {
  // Write your algorithm here
  const filter = /[\W_]/g;
  let lowWord = word.toLowerCase().replace(filter, "");
  let reverse = lowWord.split("").reverse().join("");
  return reverse === lowWord;
}

/* 
  Add your pseudocode here
  Create a function that checks for palindrome
  The function receives a string
  Turn the string to lowercase
  Split the string into substrings
  Reverse the substrings and then join checking if the origin is equal to new string
*/

/*
  Add written explanation of your solution here
  //Remove all non-alphanumeric characters 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("never odd or even"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
