import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';

const Page = ({ fields }) => {
  if (! fields || ! Object.keys(fields).length) {
    return null;
  }

  const headerFields = fields.header.fields;
  const PageHeader = () => (
    <Header
      logo={headerFields.logo.fields.file.url}
      tabs={headerFields.tabs.map(tab => tab.fields)}
    />
  );

  return (
    <PageHeader />
  );
};

Page.mapStateToProps = state => ({
  fields: state.page.fields,
});

export default connect(Page.mapStateToProps)(Page);
