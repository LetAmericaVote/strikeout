import React from 'react';
import PropTypes from 'prop-types';
import LavVideo from '../LavVideo';
import Form from '../Form';
import { fieldsFileUrl, fieldsFileType } from '../../helpers';

import './video-hero-banner.scss';

const VideoHeroBanner = (props) => {
  const {
    form, pauseButton, playButton,
    posterImage, video,
  } = props;

  const videoProps = {
    videoSrc: fieldsFileUrl(video),
    videoType: fieldsFileType(video),
    posterSrc: fieldsFileUrl(posterImage),
  };

  return (
    <div className="video-hero-banner">
      <LavVideo {...videoProps} />
      { form ? <Form {...form.fields} /> : null }
    </div>
  );
};

VideoHeroBanner.propTypes = {
  form: PropTypes.shape({
    fields: PropTypes.shape(Form.propTypes),
  }),
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
  form: null,
  posterImage: null,
  video: null,
};

export default VideoHeroBanner;
