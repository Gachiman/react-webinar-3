const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Вариант слова / окончания в зависимости от количества
 * @param {Integer} number количество элементов
 * @param {String} first первый вариант слова
 * @param {String} second второй вариант слова
 * @returns {String}
 */
export function pluralizeFor2(number, first, second) {
  if (([2, 3, 4].includes(number % 10)) &&
       (`${number / 100}`.at(-2) !== '1')) {
         return first;
       } else {
         return second;
       }
}
