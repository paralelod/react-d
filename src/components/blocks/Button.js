import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = (props) => {
  return (
      <button
          className={button}
        // className={props.class}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        {props.content}
      </button>
  );
};
export default Button;