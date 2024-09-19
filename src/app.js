import React, { useCallback, useState } from 'react';
import List from './components/list';
import CartIntro from './components/cart-intro';
import Head from './components/head';
import PageLayout from './components/page-layout';
import CartModal from './components/cart-modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getCartState();
  const totalCost = store.getTotalCost();
  const totalUnicAmount = store.getTotalUnicAmount();

  const [cartActive, setCartActive] = useState(false);
  
  const callbacksCartModal = {
    showCart: () => setCartActive(true),
    hideCart: () => setCartActive(false),
  }

  const callbacks = {
    onAddItem: useCallback(
      code => {
        store.addItem(code);
      },
      [store],
    ),

    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <CartIntro showCart={callbacksCartModal.showCart}
                 totalCost={totalCost} totalUnicAmount={totalUnicAmount} />
      <List
        list={list}
        buttonCallback={callbacks.onAddItem}
        buttonTitle="Добавить"
      />
      
      <CartModal active={cartActive} setActive={callbacksCartModal.hideCart}
                 list={cart} buttonCallback={callbacks.onDeleteItem}
                 totalCost={totalCost}
      />
    </PageLayout>
  );
}

export default App;
