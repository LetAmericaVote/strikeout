import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './link.scss';

const Link = ({ children, className, to }, { pushLocation }) => (
  <a onClick={() => pushLocation(to)} className={classnames('link', className)}>
    { children }
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  className: '',
};

Link.contextTypes = {
  pushLocation: PropTypes.func,
};

export default Link;
