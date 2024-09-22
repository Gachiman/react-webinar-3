import React from 'react';
import PropTypes from 'prop-types';
//import Item from '../item';
import './style.css';

function List({ children }) {
  return (
    <div className="List">
      {children}
    </div>
  );
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(List);
