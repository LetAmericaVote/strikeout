import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';

import HeroBanner from '../HeroBanner';
import Form from '../Form';
import ContentBlock from '../ContentBlock';
import Content from '../Content';
import VideoHeroBanner from '../VideoHeroBanner';
import ActionTileBlockList from '../ActionTileBlockList';

import Flex from '../Flex';

const Page = ({ fields }) => {
  if (! fields || ! Object.keys(fields).length) {
    return null;
  }

  const headerFields = fields.header.fields;
  const PageHeader = () => (
    <Header
      logo={headerFields.logo.fields.file.url}
      tabs={(headerFields.tabs || []).map(tab => tab.fields)}
    />
  );

  const PageFooter = () => (
    <Footer {...fields.footer.fields} />
  );

  const Modules = () => (fields.modules || []).map(module => {
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
        return (
          <ContentBlock key={module.sys.id} {...module.fields} />
        );
      };

      case 'content': {
        return (
          <Content key={module.sys.id} {...module.fields} />
        );
      };

      case 'videoHeroBanner': {
        return (
          <VideoHeroBanner key={module.sys.id} {...module.fields} />
        );
      }

      case 'actionTileBlockList': {
        return (
          <ActionTileBlockList key={module.sys.id} {...module.fields} />
        );
      }

      default: return null;
    }
  })

  return [
    <PageHeader key="header" />,
    <Flex key="modules" className="-wrap -justify-center">
      <Modules />
    </Flex>,
    <PageFooter key="footer" />,
  ];
};

Page.mapStateToProps = state => ({
  fields: state.page.fields,
});

export default connect(Page.mapStateToProps)(Page);
