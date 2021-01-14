/*

const clean = (str) => str.replace(/\s/g, "").toLowerCase();
const reverse = (str) => str.split('').reverse().join('');
const isPalindrome = (str) => str == reverse(str);

const getNextLetter = (str) => {
  let index = 0;
  let match = false;
  while (!match && index++ < str.length) {
    const substring = str.substring(index);
    match = isPalindrome(substring);
  }
  return index >=0 ? str.substring(index-1,index) : null;
}

const testString = (str) => {
  const cleanedString = clean(str);
  const palindrome = isPalindrome(cleanedString);
  const nextLetter = palindrome ? null : getNextLetter(cleanedString);
  return {palindrome, nextLetter};
}

*/

const testPalindrome = (str) => {
  const testString = cleanString(str);
  const reversed = reverseString(testString);
  const palindrome = isPalindrome(testString);
  const nextLetter = palindrome ? '' : getNextLetter(testString);
  return {
    testString,
    reversed,
    nextLetter,
    palindrome,
  };
};

const isPalindrome = (str) => str == reverseString(str);
const reverseString = (str) => str.split('').reverse().join('');
const removeSpaces = (str) => str.replace(/\s/g, '').toLowerCase();
const cleanString = (str) => removeSpaces(str).toUpperCase();
const getNextLetter = (str) => {
  let index = 0;
  let nextLetter = '';
  console.log(str);
  let match = isPalindrome(str);
  while (!match && index++ < str.length) {
    const substring = str.substring(index);
    nextLetter = str.substring(index - 1, index);
    match = isPalindrome(substring);
  }
  return nextLetter;
};

export default testPalindrome;
