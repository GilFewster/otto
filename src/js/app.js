import testPalindrome from './testPalindrome';

const elements = {
  input: document.querySelector('#txtInput'),
  result: document.querySelector('#result'),
  outputForwards: document.querySelector('#resultForwards'),
  outputBackwards: document.querySelector('#resultBackwards'),
};

const init = () => {
  elements.input.addEventListener('input', () => update());
  update();
};

const update = () => {
  // const inputElement = document.querySelector(elementNames.input);
  // const outputForwardsElement = document.querySelector(elementNames.outputForwards);
  // const outputBackwardsElement = document.querySelector(elementNames.outputBackwards);
  // const resultElement = document.querySelector(elementNames.result);
  
  const sourceText = elements.input.value || "otto";
  const result = testPalindrome(sourceText);

  elements.outputForwards.innerHTML = result.testString;
  elements.outputBackwards.innerHTML = result.reversed;
  result.isPalindrome ? elements.result.classList.add("palindrome") : elements.result.classList.remove("palindrome");
}


init();
