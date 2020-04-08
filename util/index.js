const { mock } = require('mockjs');

const number = (size, initial) => {
  const key = `number|${size}`;
  return mock({key: initial});
}

module.exports = {
  number
};
