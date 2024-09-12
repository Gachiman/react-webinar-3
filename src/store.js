/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.codeCounter = 0;
    this.initStateCodes = new Set(initState.list.map(item => item.code));
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
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: this.getCodeCount(), title: 'Новая запись' }],
    });
  }

  /**
   * Возврат и увеличение счётчика элементов
   * @returns {Integer}
   */
  getCodeCount() {
    do {
      this.codeCounter++;
    } while (this.initStateCodes.has(this.codeCounter));
    return this.codeCounter;
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;

          if (item.selected) {    // Снятие выделения не увеличивает счётчик
            item.selectCount = item.selectCount ? item.selectCount + 1 : 1;
          }
        } else if (item.selected) {
          item.selected = false;
        }
        return item;
      }),
    });
  }
}

export default Store;
