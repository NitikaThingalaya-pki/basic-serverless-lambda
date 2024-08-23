const { generateRandomNumber } = require('../src/handler');
import * as qs from 'qs';

module.exports.handle = async (event) => {
  
    // Parse the query string from the event
  const randomNumber = qs.parse(event.generateRandomNumber);
  return generateRandomNumber(event);
};
