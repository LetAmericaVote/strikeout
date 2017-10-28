import React from 'react';

const img = (props) => {
  const { src, alt } = props;

  return (
    <img src={src} alt={alt} />
  );
};

export default img;
