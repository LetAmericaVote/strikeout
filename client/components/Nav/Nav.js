import React from 'react';
import { Grid, Column, Container } from '../../core/grid';
import Image from '../Image';
import logo from './logo.png';

const Logo = () => (
  <div
    className="background-image-100 display-block"
    style={{
      backgroundImage: `url(${logo})`,
      'min-height': '30px',
      'max-width': '309px',
    }}
  />
);

const Nav = () => (
  <Grid classes={['padding-small', 'background-color-white']}>
    <Container maxWidth>
      <Grid>
        <Column size={3}>
          <Logo />
        </Column>
        <Column size={1} />
        <Column size={8}>Links</Column>
      </Grid>
    </Container>
  </Grid>
);

export default Nav;
