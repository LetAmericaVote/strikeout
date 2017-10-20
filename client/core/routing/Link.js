import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({ children, classes, to }, { pushLocation }) => (
  <a onClick={() => pushLocation(to)} className={classnames(classes)}>
    { children }
  </a>
);

Link.defaultProps = {
  classes: [],
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.array,
  to: PropTypes.string.isRequired,
};

Link.contextTypes = {
  pushLocation: PropTypes.func,
};

export default Link;
