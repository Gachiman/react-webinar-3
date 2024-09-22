import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils';
import './style.css';

function Item({ item, onAdd }) {
  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-price">{formatMoney(item.price, '₽')}</div>
      {item.amount && (
        <div className="Item-amount">{item.amount} шт</div>
      )}
      <div className="Item-actions">
        <button onClick={() => onAdd(item.code)}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default React.memo(Item);
