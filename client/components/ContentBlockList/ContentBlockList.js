import React from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';

import './content-block-list.scss';

const ContentBlockList = (props) => {
  const { contentBlocks } = props;

  if (! contentBlocks) {
    return null;
  }

  return (
    <div className="content-block-list">
      {contentBlocks.map(contentBlock => (
        <ContentBlock
          key={contentBlock.sys.id}
          {...contentBlock.fields}
        />
      ))}
    </div>
  );
};

ContentBlockList.propTypes = {
  contentBlocks: PropTypes.arrayOf(PropTypes.shape({
    sys: PropTypes.shape({
      id: PropTypes.string,
    }),
    fields: PropTypes.shape(ContentBlock.propTypes),
  })),
};

ContentBlockList.defaultProps = {
  contentBlocks: null,
};

export default ContentBlockList;
