import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Markdown from '../Markdown';
import { Link } from '../Routing';

import './action-tile-block.scss';

const ActionTileBlock = (props) => {
  const {
    backgroundImage, callToAction,
    callToActionLink, content,
  } = props;

  const actionTileStyle = {};
  if (backgroundImage) {
    actionTileStyle.backgroundImage = `url(${backgroundImage.fields.file.url})`;
  }

  return (
    <div className="action-tile-block" style={actionTileStyle}>
      <Markdown markdown={content} />
      <div className="action-tile-block__cta">
        <Button modifiers={['-red']}>
          <Link to={callToActionLink}>{callToAction}</Link>
        </Button>
      </div>
    </div>
  );
};

ActionTileBlock.propTypes = {
  backgroundImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  callToAction: PropTypes.string,
  callToActionLink: PropTypes.string,
  content: PropTypes.string,
};

ActionTileBlock.defaultProps = {
  backgroundImage: null,
  callToAction: null,
  callToActionLink: null,
  content: null,
};

export default ActionTileBlock;
