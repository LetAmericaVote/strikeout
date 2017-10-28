import React from 'react';

const del = (props) => {
  const { children } = props;

  return (
    <del>{ children }</del>
  );
};

export default del;
