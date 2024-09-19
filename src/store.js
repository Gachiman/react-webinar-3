import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;  // Список товаров
    this.listeners = []; // Слушатели изменений состояния
    this.cart = [];  // Корзина товаров
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния списка товаров
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Получение состояния корзины товаров
   * @returns {Array}
   */
  getCartState() {
    return this.cart;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setCart(newCart) {
    this.cart = newCart;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param code
   */
  addItem(code) {
    // Проверка наличия товара в корзине
    const checkInCart = this.cart.find(item => item.code === code);
    if (checkInCart) {
      this.setCart(this.cart.map(item => {
        if (item.code === code) {
          return {...item, amount: item.amount + 1};
        } else {
          return item;
        }
      }));
    } else {  // В случае отсутствия, добавляем его туда из списка товаров
      const getFromStore = this.state.list.find(item => item.code === code);
      this.setCart([...this.cart, {...getFromStore, amount: 1}]);
    }
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setCart(this.cart.filter(item => item.code !== code));
  }

  /**
   * Получение общей суммы товаров в корзине
   * @returns {number}
   */
  getTotalCost() {
    return this.cart.reduce((sum, item) => {
      return sum + (item.amount * item.price)
    }, 0);
  }

  /**
   * Получение общего кол-ва уникальных товаров в корзине
   * @returns {number}
   */
  getTotalUnicAmount() {
    return this.cart.length;
  }
}

export default Store;
