import React from 'react';
import classnames from 'classnames';

const Cell = ({ children, classes, column }) => (
  <div
    className={classnames('cell', {
      ...classes,
      [`column-${column}`]: column,
    })}
  >{children}</div>
);

Cell.defaultProps = {
  children: null,
  classes: [],
  column: null,
};

export default Cell;
