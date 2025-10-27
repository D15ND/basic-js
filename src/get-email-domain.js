const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  let index;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      index = i;
    }
  }
  return email.slice(index + 1);
}

module.exports = {
  getEmailDomain,
};
