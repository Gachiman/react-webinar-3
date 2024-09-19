import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item({ item, buttonCallback, buttonTitle }) {
  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-price">{item.price} ₽</div>
      {item.amount && (
        <div className="Item-amount">{item.amount} шт</div>
      )}
      <div className="Item-actions">
        <button onClick={() => buttonCallback(item.code)}>{buttonTitle}</button>
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
  buttonCallback: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default React.memo(Item);
