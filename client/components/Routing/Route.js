import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UrlPattern from 'url-pattern';

const Route = (props) => {
  const { activePathname, children, path } = props;
  const pattern = new UrlPattern(path);
  const match = pattern.match(activePathname);

  if (match === null) {
    return null;
  }

  return React.Children.map(children, child => React.cloneElement(child, { match }));
};

Route.propTypes = {
  path: PropTypes.string.isRequired,
  activePathname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Route.mapStateToProps = (state) => ({
  activePathname: state.routing.pathname,
});

export default connect(Route.mapStateToProps)(Route);
