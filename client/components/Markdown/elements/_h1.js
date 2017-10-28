import React from 'react';

const h1 = (props) => {
  const { children } = props;

  return (
    <h1>{ children }</h1>
  );
};

export default h1;
