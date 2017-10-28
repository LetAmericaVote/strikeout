import React from 'react';
import PropTypes from 'prop-types';

import './container.scss';

const Container = ({ children, className }) => (
  <section className={`container ${className || ''}`}>
    { children }
  </section>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

export default Container;
