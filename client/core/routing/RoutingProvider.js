import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { setPathname } from '../../actions';

class RoutingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.history = createHistory();
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(location) {
    if (! location || ! location.pathname) {
      console.error('[Routing Provider] Missing pathname');
      return;
    }

    this.props.setPathname(location.pathname);
  }

  componentDidMount() {
    const { history, updateLocation } = this;

    updateLocation(history.location);
    history.listen(location => updateLocation(location));
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

RoutingProvider.propTypes = {
  children: PropTypes.node.isRequired,
  setPathname: PropTypes.func.isRequired,
};

RoutingProvider.actionCreators = {
  setPathname,
};

export default connect(null, RoutingProvider.actionCreators)(RoutingProvider);
