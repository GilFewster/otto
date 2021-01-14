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
  const sourceText = elements.input.value || 'otto';
  const result = testPalindrome(sourceText);

  elements.outputForwards.innerHTML = result.testString;
  elements.outputBackwards.innerHTML = result.reversed;
  result.palindrome
    ? elements.result.classList.add('palindrome')
    : elements.result.classList.remove('palindrome');
  console.log(result);
};

init();
