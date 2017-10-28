import React from 'react';

const p = (props) => {
  const { children } = props;

  return (
    <p>{ children }</p>
  );
};

export default p;
