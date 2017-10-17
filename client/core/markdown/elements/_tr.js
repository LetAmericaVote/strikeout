import React from 'react';

const tr = (props) => {
  const { children } = props;

  return (
    <tr>{ children }</tr>
  );
};

export default tr;
