import PropTypes from 'prop-types';
import React from 'react';
import Head from '../head';
import List from '../list';
import './style.css';

function CartModal({active, setActive, list, buttonCallback, totalCost=0}) {
  return (
    <div className={active ? "CartModal active" : "CartModal"}>
      <div className={active ? "CartModal-content active" : "CartModal-content"}>
        <div className="CartModal-head">
          <Head title="Корзина" buttonTitle="Закрыть" buttonCallback={setActive} />
        </div>
        
        <List list={list} buttonCallback={buttonCallback} buttonTitle="Удалить"/>
        
        <div className="CartModal-bottom">
          <span>Итого</span> <span>{totalCost} ₽</span>
        </div>
      </div>
    </div>
  );
}

CartModal.PropTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number
    })
  ).isRequired,
  buttonCallback: PropTypes.func.isRequired,
  totalCost: PropTypes.number,
};

export default React.memo(CartModal);