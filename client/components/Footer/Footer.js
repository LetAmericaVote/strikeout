import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={props.logo.fields.file.url} />
      <p className="footer__disclaimer">{props.disclaimer}</p>
    </footer>
  );
};

Footer.propTypes = {

};

Footer.defaultProps = {

};

export default Footer;
