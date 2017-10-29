import React from 'react';
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export function getBySlug(slug) {
  return client.getEntries({
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

export class ContentfulRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: null,
    };

    this.parseSlug = this.parseSlug.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
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

    console.log(slug)
    getBySlug(slug).then(fields => this.setState({ fields }));
    // TODO: Instead of set state, can we push to Redux store?
  }

  render() {
    // console.log(this.state);
    // TODO: Return a page component.
    return null;
  }
}

export default client;
