import React from 'react';

const a = (props) => {
  const { href, title, target, children } = props;

  return (
    <a href={href} title={title} target={target}>
      { children }
    </a>
  );
};

export default a;
