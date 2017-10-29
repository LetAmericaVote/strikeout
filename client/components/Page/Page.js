import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import HeroBanner from '../HeroBanner';
import Form from '../Form';
import ContentBlock from '../ContentBlock';

import Container from '../Container';
import Flex from '../Flex';

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

  const containerModules = [];

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

      case 'contentBlock': {
        containerModules.push(
          <ContentBlock key={module.sys.id} {...module.fields} />
        );

        return null;
      };

      default: return null;
    }
  })

  return [
    <PageHeader key="header" />,
    <Modules key="modules" />,
    <Container key="container">
      <Flex className="-wrap-on-mobile">
        { containerModules }
      </Flex>
    </Container>,
  ];
};

Page.mapStateToProps = state => ({
  fields: state.page.fields,
});

export default connect(Page.mapStateToProps)(Page);
