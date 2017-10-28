import React from 'react';

const table = (props) => {
  const { children } = props;

  return (
    <table>{ children }</table>
  );
};

export default table;
