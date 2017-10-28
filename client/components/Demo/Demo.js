import React from 'react';
import Container from '../Container';
import Markdown from '../Markdown';
import demoMarkdown from './demoMarkdown';

const Demo = () => (
  <Container>
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
  </Container>
);

export default Demo;
