import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, HighlightedLink } from '../Routing';
import Flex, { FlexItem } from '../Flex';

import './header.scss';
import hamburger from './hamburger.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburger: false,
    };

    this.hamburgerClick = this.hamburgerClick.bind(this);
  }

  hamburgerClick() {
    this.setState({
      hamburger: ! this.state.hamburger,
    });
  }

  render() {
    const { logo, tabs } = this.props;

    const navClassName = classnames('header__nav', {
      '-open': this.state.hamburger,
    });

    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} />
        </Link>
        <img
          src={hamburger}
          alt="menu"
          className="header__toggle"
          onClick={this.hamburgerClick}
        />
        <Flex className={navClassName}>
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
  }
}

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
