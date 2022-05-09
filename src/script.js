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

const keys = document.querySelectorAll('.key');
for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('data-keyname', keys[i].textContent);
  if (keys[i].dataset.keyname.length < 2) {
    keys[i].setAttribute('data-upperkeyname', keys[i].textContent.toUpperCase());
  } else {
    keys[i].setAttribute('name', keys[i].textContent);
  }
}

const checkUpperKeyName = (e) => {
  if (e.target.dataset.upperkeyname) {
    input.textContent += e.target.dataset.upperkeyname;
  }
};

const checkCharValue = (e) => {
  if (e.target.dataset.keyname.length < 2) {
    input.textContent += e.target.textContent;
  }
};

const changeLang = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle('ru');
    if (keys[i].classList.contains('ru')) {
      keys[i].textContent = keys[i].dataset.ru;
      input.setAttribute('lang', 'ru');
    } else {
      keys[i].textContent = keys[i].dataset.en;
      input.setAttribute('lang', 'en');
    }
  }
};

const caps = document.getElementsByName('CapsLock')[0];

keyborad.addEventListener('click', (event) => {
  event.target.classList.add('push');

  if (event.target.textContent === 'Backspace') {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
  } else if (event.target.textContent === 'Enter') {
    input.textContent += '\n';
  } else if (event.target.textContent === 'Tab') {
    input.textContent += '\t';
  } else if (event.target.textContent === ' ') {
    input.textContent += ' ';
  } else if (event.target.textContent === 'CapsLock') {
    caps.classList.toggle('active');
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.keyname.length < 2) {
        keys[i].classList.toggle('uppercase');
      }
    }
  }

  if (caps.classList.contains('active')) {
    checkUpperKeyName(event);
  } else {
    checkCharValue(event);
  }
});