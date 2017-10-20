import React from 'react';
import { Grid, Column, Container } from '../../core/grid';
import { Link } from '../../core/routing';
import logo from './logo.png';

const Logo = () => (
  <Link to="/">
    <div
      className="background-image-100 display-block"
      style={{
        backgroundImage: `url(${logo})`,
        minHeight: '30px',
        maxWidth: '309px',
      }}
    />
  </Link>
);

const NavLink = ({ label, path }) => (
  <Link
    label={label}
    to={path || `/${label}`}
    classes={[
      'padding-small-horizontal', 'display-flex',
      'highlight', 'cursor-pointer',
    ]}
  >
    <span>{ label }</span>
  </Link>
);

const Links = () => [
  <NavLink key="about" label="about" />,
  <NavLink key="states" label="states" />,
  <NavLink key="action" label="action" />,
  <NavLink key="endorsements" label="endorsements" />,
  <NavLink key="interns" label="intern" path="https://google.com" />,
  <NavLink key="store" label="store" path="https://yahoo.com" />,
  <NavLink key="donate" label="donate" path="https://twitter.com" />,
];

const Nav = () => (
  <Grid classes={['background-color-white']}>
    <Container maxWidth>
      <Grid classes={['padding-small']}>
        <Column size={3}>
          <Logo />
        </Column>
        <Column size={1} />
        <Column size={8} classes={[
          'margin-top', 'overflow-horizontal-scroll',
          'overflow-vertical-hidden',
        ]}>
          <Grid commonDirection={false} classes={['grid-wrap']}>
            <Links />
          </Grid>
        </Column>
      </Grid>
    </Container>
  </Grid>
);

export default Nav;
