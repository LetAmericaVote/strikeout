export const SET_FIELDS = 'SET_FIELDS';

/**
 * Set the fields to use to construct the page.
 *
 * @param {Object} fields
 */
export function setFields(fields) {
  return { type: SET_FIELDS, fields: JSON.parse(JSON.stringify(fields)) };
}
