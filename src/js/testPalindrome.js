const testPalindrome = (str) => {
  const testString = str.toUpperCase();
  const reversed = reverseString(testString);
  const isPalindrome = removeSpaces(testString) == removeSpaces(reversed)
  
  return {
    testString,
    reversed,
    isPalindrome
  }
}


const reverseString = (str) => str.split('').reverse().join('');
const removeSpaces = (str) => str.replace(/\s/g, '').toLowerCase();

export default testPalindrome;