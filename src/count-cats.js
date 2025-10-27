const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Remove line below and write your code here
  const arr = matrix.flat(Infinity);
  let res = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i]==='^^') {
      res++;
    }
  }
  return res;
}

module.exports = {
  countCats
};
