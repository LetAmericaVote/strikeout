export const SET_CLASSES = 'SET_CLASSES';

/**
 * Set the classes to use for styling.
 *
 * @param {Object} classes Provided by JSS Stylesheet.
 */
export function setClasses(classes) {
  return { type: SET_CLASSES, classes };
}
