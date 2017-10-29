import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';

import './highlightedLink.scss';

const HighlightedLink = (props) => {
  const { label, link, highlightStyle, alwaysHighlighted, isActive } = props;

  const className = classnames('highlighted-link', {
    [`-${highlightStyle.toLowerCase()}`]: true,
    '-always-highlighted': alwaysHighlighted,
    '-is-active': isActive,
  });

  return (
    <Link to={link} className={className}>
      <span>{ label }</span>
    </Link>
  );
};

HighlightedLink.propTypes = {
  label: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  highlightStyle: PropTypes.string,
  alwaysHighlighted: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
};

HighlightedLink.defaultProps = {
  highlightStyle: 'Blue',
  alwaysHighlighted: false,
};

HighlightedLink.mapStateToProps = (state, props) => ({
  isActive: state.routing.pathname === props.link,
});

export default connect(HighlightedLink.mapStateToProps)(HighlightedLink);
