import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Markdown from '../Markdown';

import './content-block.scss';

const BLUE_WHITE_COLOR = 'Blue Header, Black text';
const ALL_WHITE_COLOR = 'All White';

const HALF_DISPLAY = 'Half';
const FULL_DISPLAY = 'Full';

const ContentBlock = (props) => {
  const {
    backgroundImage, colorStyle,
    content, displayStyle,
  } = props;

  const blockStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage.fields.file.url})`
  } : null;

  const blockClass = classnames('content-block', {
    '-all-white': colorStyle === ALL_WHITE_COLOR,
    '-blue-headers': colorStyle == BLUE_WHITE_COLOR,
  });

  return (
    <div className={blockClass} style={blockStyle}>
      <Markdown markdown={content} />
    </div>
  );
};

ContentBlock.propTypes = {
  backgroundImage: PropTypes.shape({
    fields: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  colorStyle: PropTypes.oneOf([
    BLUE_WHITE_COLOR, ALL_WHITE_COLOR
  ]),
  content: PropTypes.string,
  displayStyle: PropTypes.oneOf([
    HALF_DISPLAY, FULL_DISPLAY
  ]),
};

ContentBlock.defaultProps = {
  backgroundImage: null,
  colorStyle: ALL_WHITE_COLOR,
  content: null,
  displayStyle: FULL_DISPLAY,
};

export default ContentBlock;
