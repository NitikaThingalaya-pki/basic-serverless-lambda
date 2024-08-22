const { generateRandomNumber } = require('../src/handler');

module.exports.handle = async (event) => {
  return generateRandomNumber(event);
};
