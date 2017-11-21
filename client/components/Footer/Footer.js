import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Routing';
import Button from '../Button';

import './footer.scss';

const Footer = (props) => {
  const {
    contactUsLink, disclaimer, donateLink,
    facebookLink, logo, privacyPolicyLink, twitterLink,
  } = props;

  const FooterColumn = ({ children }) => (
    <div className="footer__column">
      { children }
    </div>
  );

  const Logo = () => logo ? (
    <img className="footer__logo" src={logo.fields.file.url} />
  ) : null;

  const Disclaimer = () => disclaimer ? (
    <p className="footer__disclaimer">{props.disclaimer}</p>
  ) : null;

  const Links = () => [
    privacyPolicyLink ? (
      <Link
        key="privacy policy"
        className="footer__link"
        to={privacyPolicyLink}
      >Privacy Policy</Link>
    ) : null,
    contactUsLink ? (
      <Link
        key="contact us"
        className="footer__link"
        to={contactUsLink}
      >Contact Us</Link>
    ) : null,
  ];

  const DonateLink = () => donateLink ? (
    <Button modifiers={['-full-width', '-red', '-center']}>
      <Link to={donateLink}>Donate</Link>
    </Button>
  ) : null;

  const SocialIcons = () => [
    // TODO
  ];

  return (
    <footer className="footer">
      <FooterColumn>
        <SocialIcons />
      </FooterColumn>
      <FooterColumn>
        <Logo />
        <Links />
        <Disclaimer />
      </FooterColumn>
      <FooterColumn>
        <DonateLink />
      </FooterColumn>
    </footer>
  );
};

Footer.propTypes = {
  contactUsLink: PropTypes.string,
  disclaimer: PropTypes.string,
  donateLink: PropTypes.string,
  facebookLink: PropTypes.string,
  logo: PropTypes.shape({
    fields: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  privacyPolicyLink: PropTypes.string,
  twitterLink: PropTypes.string,
};

Footer.defaultProps = {
  contactUsLink: null,
  disclaimer: null,
  donateLink: null,
  facebookLink: null,
  logo: null,
  privacyPolicyLink: null,
  twitterLink: null,
};

export default Footer;
