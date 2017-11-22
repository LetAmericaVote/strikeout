import React from 'react';
import PropTypes from 'prop-types';
import LavVideo from '../LavVideo';
import { fieldsFileUrl, fieldsFileType } from '../../helpers';

import './video-hero-banner.scss';

const VideoHeroBanner = (props) => {
  const {
    bannerCopy, bannerTitle, formFields,
    pauseButton, playButton, posterImage, video
  } = props;

  const videoProps = {
    videoSrc: fieldsFileUrl(video),
    videoType: fieldsFileType(video),
    posterSrc: fieldsFileUrl(posterImage),
  };

  return (
    <div className="video-hero-banner">
      <LavVideo {...videoProps} />
    </div>
  );
};

VideoHeroBanner.propTypes = {
  bannerCopy: PropTypes.string,
  bannerTitle: PropTypes.string,
  formFields: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      isRequired: PropTypes.bool,
      label: PropTypes.string,
      type: PropTypes.string,
    }),
  })),
  posterImage: PropTypes.shape({
    fields: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  video: PropTypes.shape({
    fields: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }),
  }),
};

VideoHeroBanner.defaultProps = {
  bannerCopy: null,
  bannerTitle: null,
  formFields: [],
  posterImage: null,
  video: null,
};

export default VideoHeroBanner;
