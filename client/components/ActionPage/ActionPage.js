import React from 'react';
import Nav from '../Nav';
import Hero, { album } from '../Hero';
import ActionForm from '../ActionForm';
import { Container } from '../../core/grid';

const ActionPage = () => (
  <div>
    <Nav />
    <Hero text="Take Action" src={album().booth} />
    <Container maxWidth classes={['padding-small']}>
      <p className="color-red text-medium-size margin-vertical display-block text-align-center">You can’t win the political argument if you’re not part of the conversation. Sign up below to help Let America Vote protect voting rights.</p>
      <ActionForm />
    </Container>
  </div>
);

export default ActionPage;
