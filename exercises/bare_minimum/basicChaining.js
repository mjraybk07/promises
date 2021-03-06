/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;

var writeToFileAsync = function(writeFilePath, data) {
  return new Promise (function (resolve, reject) {
    data = JSON.stringify(data);
    fs.writeFile(writeFilePath, data, 'utf-8', function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }        
    })
  })
}


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO  
    
  return pluckFirstLineFromFileAsync(readFilePath )
    .then( function (name) {
      //console.log('this is the name.....::', name)
       return getGitHubProfileAsync(name);
    })
    .then( function (profile ) {
      //console.log('this is the profile.....::', profile)
      return writeToFileAsync(writeFilePath, profile) ;
    })
    .catch( function (error) {
      //console.log('error......:::: ', error);
    })
    .finally( function () {
      console.log('FINISHED.......');
    })    
  
};



// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile,
  writeToFileAsync: writeToFileAsync
};
