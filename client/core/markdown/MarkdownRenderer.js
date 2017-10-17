import React, { createElement } from 'react';
import marksy from 'marksy';
import MarkdownErrorBoundry from './MarkdownErrorBoundry';
import * as elements from './elements';

const MarkdownRenderer = (props) => {
  const { markdown } = props;

  const compile = marksy({
    createElement,
    elements,
  });

  return (
    <MarkdownErrorBoundry>
      { compile(markdown, {}, {}).tree }
    </MarkdownErrorBoundry>
  );
};

export default MarkdownRenderer;
