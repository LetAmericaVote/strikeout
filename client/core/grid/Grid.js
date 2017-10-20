import React from 'react';
import classnames from 'classnames';

const Grid = ({ children, classes, commonDirection }) => (
  <div
    className={classnames(
      'grid', classes, { 'grid-common-direction': commonDirection }
    )}
  >{children}</div>
);

Grid.defaultProps = {
  children: null,
  classes: [],
  commonDirection: true,
};

export default Grid;
