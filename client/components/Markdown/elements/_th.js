import React from 'react';

const th = (props) => {
  const { children } = props;

  return (
    <th>{ children }</th>
  );
};

export default th;
