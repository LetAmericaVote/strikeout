import React from 'react';

const blockquote = (props) => {
  const { children } = props;

  return (
    <blockquote>{ children }</blockquote>
  );
};

export default blockquote;
