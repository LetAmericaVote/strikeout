import React from 'react';
import PropTypes from 'prop-types';
import { Link, HighlightedLink } from '../Routing';
import Flex, { FlexItem } from '../Flex';

import './header.scss';

const Header = (props) => {
  const { logo, tabs } = props;

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} />
      </Link>
      <Flex className="header__nav">
        {tabs.map(tab => (
          <FlexItem key={tab.link}>
            <HighlightedLink
              label={tab.label}
              link={tab.link}
              highlightStyle={tab.highlightStyle}
              alwaysHighlighted={tab.alwaysHighlighted}
            />
          </FlexItem>
        ))}
      </Flex>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
    highlightStyle: PropTypes.string,
    alwaysHighlighted: PropTypes.bool,
  })),
};

Header.defaultProps = {
  logo: '',
  tabs: null,
};

export default Header;
