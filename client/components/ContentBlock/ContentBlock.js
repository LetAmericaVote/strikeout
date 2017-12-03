import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Markdown from '../Markdown';
import { Link } from '../Routing';

import './content-block.scss';

const BLUE_WHITE_COLOR = 'Blue Header, Black text';
const ALL_WHITE_COLOR = 'All White';

const HALF_DISPLAY = 'Half';
const FULL_DISPLAY = 'Full';

const LEFT_ALIGN = 'Left Align';
const CENTER_ALIGN = 'Center Align';

const ContentBlock = (props) => {
  const {
    backgroundColor, backgroundImage, blockLink, colorStyle,
    content, displayStyle, textAlignment,
  } = props;

  const blockStyle = {};
  if (backgroundImage) {
    blockStyle.backgroundImage = `url(${backgroundImage.fields.file.url})`;
  } else if (backgroundColor) {
    blockStyle.backgroundColor = `#${backgroundColor}`;
  }

  const blockClass = classnames('content-block', {
    '-all-white': colorStyle === ALL_WHITE_COLOR,
    '-blue-headers': colorStyle == BLUE_WHITE_COLOR,
    '-full-display': displayStyle === FULL_DISPLAY,
    '-half-display':  displayStyle === HALF_DISPLAY,
    '-center-align': textAlignment === CENTER_ALIGN,
  });

  const BlockContainer = ({ children }) => blockLink ? (
    <Link to={blockLink} className="content-block__link">
      { children }
    </Link>
  ) : children;

  return (
    <div className={blockClass} style={blockStyle}>
      <BlockContainer>
        <Markdown markdown={content} />
      </BlockContainer>
    </div>
  );
};

ContentBlock.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.shape({
    fields: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  blockLink: PropTypes.string,
  colorStyle: PropTypes.oneOf([
    BLUE_WHITE_COLOR, ALL_WHITE_COLOR,
  ]),
  content: PropTypes.string,
  displayStyle: PropTypes.oneOf([
    HALF_DISPLAY, FULL_DISPLAY,
  ]),
  textAlignment: PropTypes.oneOf([
    LEFT_ALIGN, CENTER_ALIGN,
  ]),
};

ContentBlock.defaultProps = {
  backgroundColor: null,
  backgroundImage: null,
  blockLink: null,
  colorStyle: ALL_WHITE_COLOR,
  content: null,
  displayStyle: FULL_DISPLAY,
  textAlignment: LEFT_ALIGN,
};

export default ContentBlock;
