import { create } from 'jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import expand from 'jss-expand';
import propsSort from 'jss-props-sort';

export default function () {
  const jss = create();

  const plugins = [
    vendorPrefixer(),
    camelCase(),
    expand(),
    propsSort(),
  ];

  jss.use(...plugins);

  jss.setup({
    insertionPoint: 'jss',
  });

  return jss;
};
