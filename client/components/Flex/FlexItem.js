import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './flex-item.scss';

const FlexItem = ({ children, className }) => (
  <div className={classnames('flex-item', className)}>
    { children }
  </div>
);

FlexItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FlexItem.defaultProps = {
  className: null,
};

export default FlexItem;
