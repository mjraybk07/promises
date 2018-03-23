/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf-8', function (err, res)  {
    if (err) {
      callback(err, null);
    } else {
      var result = res.split('\n')[0]; 
      callback(null, result);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO

  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.statusCode);
    }
  })

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
