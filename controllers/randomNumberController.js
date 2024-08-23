const { generateRandomNumber } = require('../src/handler');
const qs = require('qs')

module.exports.handle = async (event) => {
    // Parse the query string from the event
  const param = qs.parse(event.queryStringParameters);
  console.log("Parse value:",param);
    
  return generateRandomNumber(event);
};
