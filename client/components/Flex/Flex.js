import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Flex = ({ children, className }) => (
  <div className={classnames('flex', className)}>
    { children }
  </div>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Flex.defaultProps = {
  className: null,
};

export default Flex;
