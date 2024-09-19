import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title, buttonTitle='', buttonCallback=null }) {
  return (
    <div className="Head">
      <h1>{title}</h1>
      {buttonTitle && (
        <div className="Head-button">
          <button onClick={() => buttonCallback()}>{buttonTitle}</button>
        </div>  
      )}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  buttonCallback: PropTypes.func,
};

export default React.memo(Head);
