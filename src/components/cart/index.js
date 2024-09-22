import PropTypes from 'prop-types';
import React from 'react';
import List from '../list';
import { formatMoney } from '../../utils';
import Head from '../head';
import './style.css';

function Cart({ setActive, totalCost=0, children }) {
  return (
    <div>
      <div className="CartModal-head">
        <Head title="Корзина" buttonTitle="Закрыть" buttonCallback={setActive} />
      </div>
      
      <List>
        {children}
      </List>
      
      <div className="CartModal-bottom">
        <span>Итого</span> <span>{formatMoney(totalCost, '₽')}</span>
      </div>
    </div>
  )
}

Cart.PropTypes = {
  setActive: PropTypes.func.isRequired,
  totalCost: PropTypes.number,
  children: PropTypes.node,
}

export default React.memo(Cart);