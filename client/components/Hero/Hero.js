import React from 'react';
import { Grid, Container } from '../../core/grid';

const Hero = ({ src, text }) => (
  <div
    className="background-image-cover background-image-center background-image-height-hero display-block"
    style={{
      backgroundImage: `url(${src})`,
    }}
  >
    <Container maxWidth classes={['height-100']}>
      <Grid classes={['padding', 'grid-justify-center', 'grid-align-center', 'height-100']}>
        <h1
          className="text-transform-uppercase text-hero-size text-align-center bold-font-weight color-white"
        >{ text }</h1>
      </Grid>
    </Container>
  </div>
);

export default Hero;
