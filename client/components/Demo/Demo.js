import React from 'react';
import Container from '../Container';

import Header from '../Header';

import Markdown from '../Markdown';
import demoMarkdown from './demoMarkdown';

const Demo = () => [
  <Header
    key="header"
    logo="https://images.contentful.com/omawwehmvkr1/1NSI3SAQqcgACw2KYkAceQ/8112be4c403e496e5504c668da078891/logo.svg"
    tabs={[
      {
        label: 'test',
        link: '/',
      },
      {
        label: 'demo',
        link: '/demo',
      },
      {
        label: 'hello',
        link: '/hello',
      },
      {
        label: 'world',
        link: '/world',
        highlightStyle: 'red',
      },
      {
        label: 'always',
        link: '/always',
        highlightStyle: 'red',
        alwaysHighlighted: true,
      },
    ]}
  />,
  <Container key="typography">
    <div>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium tempus odio et convallis.</p>
    </div>
    <Markdown markdown={demoMarkdown} />
    <div>

    </div>
  </Container>
];

export default Demo;
