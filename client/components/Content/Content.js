import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';
import Container from '../Container';

import './content.scss';

const Content = (props) => (
  <Container>
    <article className="content">
      <Markdown markdown={props.content} />
    </article>
  </Container>
);

export default Content;
