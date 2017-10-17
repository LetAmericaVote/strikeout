import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { JssWrapper } from '../styling';
import { setClasses } from '../../actions';

// TODO: fix this
const testStyle = { test: { color: 'blue' } };

class StyleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.jss = JssWrapper();
    this.stylesheet = null;
  }

  componentDidMount() {
    const stylesheet = this.jss.createStyleSheet(testStyle).attach();

    this.stylesheet = stylesheet;
    this.props.setClasses(stylesheet.classes);
  }

  componentDidUpdate() {
    // TODO...
    // Unmount old stylesheet
    // Mount new one
    // Update classes
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

StyleProvider.actions = {
  setClasses,
};

export default connect(null, StyleProvider.actions)(StyleProvider);
