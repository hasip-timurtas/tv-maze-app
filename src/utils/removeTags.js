/**
 * Removes html tags from the given text
 * 
 * @param {string} str 
 * @returns {string} text without html elements
 */
export const removeTags = (str) => {
  if ((str === null) || (str === '')) {
    return false;
  } else {
    str = str.toString();
  }
  return str.replace(/(<([^>]+)>)/ig, '');
}