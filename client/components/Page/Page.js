import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import HeroBanner from '../HeroBanner';
import Form from '../Form';

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

  const Modules = () => fields.modules.map(module => {
    switch (module.sys.contentType.sys.id) {
      case 'heroBanner': {
        return (
          <HeroBanner key={module.sys.id} {...module.fields} />
        );
      };

      case 'form': {
        return (
          <Form key={module.sys.id} {...module.fields} />
        );
      };

      default: return null;
    }
  })

  return [
    <PageHeader key="header" />,
    <Modules key="modules" />
  ];
};

Page.mapStateToProps = state => ({
  fields: state.page.fields,
});

export default connect(Page.mapStateToProps)(Page);
