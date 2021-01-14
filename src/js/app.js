import testPalindrome from './testPalindrome';
import '../css/styles.scss';

const elements = {
  ui: document.querySelector('#ui'),
  input: document.querySelector('#txtInput'),
  hint: document.querySelector('#hint'),
};

const init = () => {
  elements.input.addEventListener('input', () => update());
  update();
};

const update = () => {
  const sourceText = elements.input.value || 'zx';
  const { palindrome, testString, nextLetter } = testPalindrome(sourceText);
  palindrome ? elements.ui.classList.add('palindrome') : elements.ui.classList.remove('palindrome');
  const completion = `${testString}<span>${nextLetter}</span>`;
  elements.hint.innerHTML = completion;
  console.log(completion);
};

init();
