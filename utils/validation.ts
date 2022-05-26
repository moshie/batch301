import { isWebUri } from 'valid-url';

export const validate = (text = '') => {
  var errors = [];
  var redirects = text.split('\n');

  if (!text.length) {
    errors.push({
      message: 'Please supply some urls to test',
    });
  }

  if (redirects.length > 1000) {
    errors.push({
      message: `Please provide no more than ${1000} redirects`,
    });
  }

  redirects.forEach((redirect, line) => {
    if (!isWebUri(redirect) && redirect !== '') {
      errors.push({
        message: `"${redirect}" on line: ${line + 1} is not a valid url`,
      });
    }
  });

  return errors;
};
