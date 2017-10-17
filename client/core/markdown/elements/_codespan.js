import React from 'react';

const codespan = (props) => {
  const { children } = props;

  return (
    <code className="w3-codespan">{ children }</code>
  );
};

export default codespan;
