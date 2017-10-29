import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createClient } from 'contentful';
import { setFields } from '../../actions';
import Page from '../Page';

class ContentRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: null,
    };

    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    this.parseSlug = this.parseSlug.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
    this.getBySlug = this.getBySlug.bind(this);
  }

  componentDidMount() {
    this.fetchPage(this.parseSlug(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (this.parseSlug(nextProps) === this.parseSlug(this.props)) {
      return;
    }

    this.fetchPage(this.parseSlug(nextProps));
  }

  parseSlug(props) {
    return props.match._;
  }

  fetchPage(slug) {
    if (! slug) {
      return;
    }

    this.getBySlug(slug).then(this.props.setFields);
  }

  getBySlug(slug) {
    return this.client.getEntries({
      'content_type': 'page',
      'fields.slug': slug,
      'include': 3,
    }).then((response) => {
      if (! response || ! response.items || ! response.items.length) {
        return null;
      }

      return response.items[0].fields;
    });
  }

  render() {
    return (
      <Page />
    );
  }
}

ContentRoute.propTypes = {
  setFields: PropTypes.func.isRequired,
  match: PropTypes.shape({
    _: PropTypes.string,
  }),
};

ContentRoute.actionCreators = {
  setFields,
};

export default connect(null, ContentRoute.actionCreators)(ContentRoute);
