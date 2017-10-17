import grid from './grid';
import spacing from './spacing';
import typography from './typography';

export default function (store) {
  return {
    ...grid(store),
    ...spacing(store),
    ...typography(store),
  };
};
