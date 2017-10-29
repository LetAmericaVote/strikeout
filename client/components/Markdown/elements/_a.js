import React from 'react';
import { HighlightedLink } from '../../Routing';

const a = (props) => {
  const { href, title, target, children } = props;

  return (
    <HighlightedLink label={children} link={href} alwaysHighlighted />
  );
};

export default a;
