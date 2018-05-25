const express = require('express');
const github = require('../helpers/github.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
	var userName;
	req.on('data', (chunk) => {
		userName = chunk + '';
  })
  .on('end', () => {
  	github.getReposByUsername(userName);
	  console.log('a post request was made', userName);

	  res.end();
	});
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

