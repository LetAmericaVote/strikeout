import React, { createElement } from 'react';
import marksy from 'marksy';
import MarkdownErrorBoundry from './MarkdownErrorBoundry';
import * as elements from './elements';

import './markdown.scss';

const MarkdownRenderer = (props) => {
  const { markdown } = props;

  const compile = marksy({
    createElement,
    elements,
  });

  return (
    <div className="markdown">
      <MarkdownErrorBoundry>
        { compile(markdown, {}, {}).tree }
      </MarkdownErrorBoundry>
    </div>
  );
};

export default MarkdownRenderer;
