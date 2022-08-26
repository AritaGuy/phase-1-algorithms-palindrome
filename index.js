function isPalindrome(word) {
  // Write your algorithm here
  // program to check if the string is palindrome or not



  // convert string to an array
  const arrayValues = word.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(word == reverseString) {
      console.log('It is a palindrome');
      return true
  }
  else {
      console.log('It is not a palindrome');
      return false
  }
}


isPalindrome('abba')
/* 
  Add your pseudocode here
  function isPalindrome(parameter){
  use the palindrome checker on the parameter
  if is palindrome, return true
  if its not, return false
}
*/

/*
  Add written explanation of your solution here
  split(' ') method converts the string into individual array characters
  reverse(' ') reverses the position in an array
  join(' ') joins all the elements of an array into a string
  if...else used to check if the string and the reversed sting are equal. If equal,
  the string is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
