import PropTypes from 'prop-types';
import React from 'react';
import Head from '../head';
import List from '../list';
import { formatMoney } from '../../utils';
import './style.css';

function Modal({active, children}) {
  return (
    <div className={active ? "CartModal active" : "CartModal"}>
      <div className={active ? "CartModal-content active" : "CartModal-content"}>
        {children}
      </div>
    </div>
  );
}

Modal.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default React.memo(Modal);