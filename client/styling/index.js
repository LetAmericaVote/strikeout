import jss from 'jss';
import preset from 'jss-preset-default';
import isolate from 'jss-isolate';
import utilities from './utilities';

jss.use(isolate({
  reset: ['all', {
    boxSizing: 'border-box',
  }],
}));

export default function (name, classes = []) {
  let styles = {};

  const classes.forEach((className) => {
    styles = {
      ...styles,
      ...utilities[className],
    };
  });

  return jss.createStyleSheet({ [name]: styles });
}
