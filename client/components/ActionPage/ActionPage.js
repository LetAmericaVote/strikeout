import React from 'react';
import Nav from '../Nav';
import Hero, { album } from '../Hero';

const ActionPage = () => (
  <div>
    <Nav />
    <Hero text="Take Action" src={album().booth} />
  </div>
);

export default ActionPage;
