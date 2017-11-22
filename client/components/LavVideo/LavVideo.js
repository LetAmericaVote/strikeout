import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import playButton from './play-button.svg';
import pauseButton from './pause-button.svg';
import './lav-video.scss';

class LavVideo extends React.Component {
  constructor(props) {
    super(props);

    this.id = Math.random().toString();
    this.onToggle = this.onToggle.bind(this);

    this.state = {
      isPlaying: false,
    };
  }

  componentDidUpdate() {
    const ref = this.refs[this.id];

    this.state.isPlaying ? ref.play() : ref.pause();
  }

  onToggle() {
    this.setState({
      isPlaying: ! this.state.isPlaying,
    });
  }

  render() {
    const { posterSrc, videoSrc, videoType } = this.props;
    const { isPlaying } = this.state;
    const { id, onToggle } = this;

    const videoClassName = classnames('lav-video', {
      '-is-playing': isPlaying,
    });

    const toggleButtonClassName = classnames('video__toggle-button', {
      '-is-playing': isPlaying,
    });

    const toggleButtonBackground = isPlaying ? pauseButton : playButton;

    const ToggleButton = () => (
      <div
        onClick={onToggle}
        style={{
          backgroundImage: `url(${toggleButtonBackground})`
        }}
        className={toggleButtonClassName}
      />
    );

    return (
      <div className={videoClassName}>
        <ToggleButton />
        <video
          ref={id}
          poster={posterSrc}
          preload="auto"
        >
          <source type={videoType} src={videoSrc} />
        </video>
      </div>
    );
  }
}

LavVideo.propTypes = {
  posterSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  videoType: PropTypes.string,
};

LavVideo.defaultProps = {
  posterSrc: '',
  videoSrc: '',
  videoType: '',
};

export default LavVideo;
