import React from 'react';
import classnames from 'classnames';

const Column = ({ children, classes, size }) => (
  <div
    className={classnames('column', {
      ...classes,
      [`column-${size}`]: size,
    })}
  >{children}</div>
);

Column.defaultProps = {
  children: null,
  classes: [],
  size: null,
};

export default Column;
