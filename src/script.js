const keyContent = {
  en: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift'],
    ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ'],
  ],
  ru: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift'],
    ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ'],
  ],
};

const init = (parent, tag, classElem) => {
  const nameElem = document.createElement(`${tag}`);
  nameElem.classList.add(`${classElem}`);
  document.querySelector(`${parent}`).append(nameElem);
  return nameElem;
};

const input = init('body', 'textarea', 'keyboard-input');
const keyborad = init('body', 'div', 'container');
const info = init('body', 'p', 'info');

info.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + alt';

for (let i = 0; i < 5; i++) {
  init('.container', 'div', 'rows');
}

const rows = [...document.querySelectorAll('.rows')];

const createKey = (lang) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < lang[i].length; j++) {
      const nameElem = document.createElement('button');
      nameElem.classList.add('key');
      nameElem.setAttribute('id', `row_${i}_key_${j}`);
      nameElem.setAttribute('data-en', keyContent.en[i][j]);
      nameElem.setAttribute('data-ru', keyContent.ru[i][j]);
      nameElem.textContent = keyContent.en[i][j];
      rows[i].append(nameElem);
    }
  }
};
createKey(keyContent.en);