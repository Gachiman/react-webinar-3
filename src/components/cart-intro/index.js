import React from 'react';
import PropTypes from 'prop-types';
import { plural, formatMoney } from '../../utils';
import './style.css';

function CartIntro({ showCart, totalCost=0, totalUnicAmount=0}) {
  return (
    <div className="CartIntro">
      <div>В корзине:&nbsp;
        <span className="CartIntro-summary">
          {totalUnicAmount ?
           `${totalUnicAmount} ${plural(totalUnicAmount, {
            one: 'товар',
            few: 'товара',
            many: 'товаров',
           })} / ${formatMoney(totalCost, '₽')}` : 'пусто'}
        </span>
      </div>
      <button className="CartIntro-button" onClick={() => showCart()}>Перейти</button>
    </div>
  );
}

CartIntro.propTypes = {
  showCart: PropTypes.func.isRequired,
  totalCost: PropTypes.number,
  totalUnicAmount: PropTypes.number,
};

export default React.memo(CartIntro);
