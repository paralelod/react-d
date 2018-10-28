import React from 'react';
import PropTypes from 'prop-types';
import { btn } from './Button.module.scss';

const Button = (props) => {
  return (
      <button
        className={btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        {props.content}
      </button>
  );
};
export default Button;