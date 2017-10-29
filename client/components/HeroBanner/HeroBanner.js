import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './hero-banner.scss';

const BANNER_CENTER = 'Center Aligned';
const BANNER_LEFT = 'Left Aligned';

const HeroBanner = (props) => {
  const BackgroundImage = () => (
    <div className="hero-banner__background"
      style={{
        backgroundImage: `url(${props.backgroundImage.fields.file.url})`,
      }}
    />
  );

  return (
    <div className={classnames('hero-banner', {
        '-center': props.bannerLayout === BANNER_CENTER,
      }
    )}>
      <BackgroundImage />
      <h1 className="hero-banner__copy">{props.bannerCopy}</h1>
    </div>
  );
};

HeroBanner.propTypes = {
  backgroundImage: PropTypes.shape({
    fields: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  bannerCopy: PropTypes.string,
  bannerLayout: PropTypes.oneOf([
    BANNER_LEFT, BANNER_CENTER,
  ]),
};

HeroBanner.defaultProps = {
  backgroundImage: '',
  bannerCopy: '',
  bannerLayout: ''
};

export default HeroBanner;
