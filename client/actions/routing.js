export const SET_PATHNAME = 'SET_PATHNAME';

/**
 * Set the current pathname and push it to the history stack.
 *
 * @param {String} pathname
 */
export function setPathname(pathname) {
  return { type: SET_PATHNAME, pathname };
};
