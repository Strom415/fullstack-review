const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, save) => {
  let options = {
    url: 'https://api.github.com' + '/users/'+ user + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    save(JSON.parse(body))
  });

}

module.exports.getReposByUsername = getReposByUsername;