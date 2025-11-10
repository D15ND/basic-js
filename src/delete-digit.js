const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  // throw new NotImplementedError('Not implemented');
  const num = n.toString();
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    let preRes = +(num.slice(0, i) + num.slice(i + 1));
    if (preRes > res) {
      res = preRes;
    }
  }
  return res;
}

module.exports = {
  deleteDigit,
};
