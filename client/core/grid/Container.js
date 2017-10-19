import React from 'react';
import classnames from 'classnames';

const Container = ({ children, maxWidth, classes }) => (
  <div
    className={
      classnames('container', {
        ...classes,
        'container-max': maxWidth,
      })
    }
  >{ children }</div>
);

Container.defaultProps = {
  children: null,
  maxWidth: false,
  classes: [],
};

export default Container;
