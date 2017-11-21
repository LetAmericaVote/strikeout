import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({ children, modifiers, onClick }) => (
  <button
    className={classnames('button', modifiers)}
    onClick={onClick}
  >
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  modifiers: null,
  onClick: null,
};

export default Button;
