const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
	var userName;
	req.on('data', (chunk) => {
		userName = chunk + '';
  })
  .on('end', () => {
  	github.getReposByUsername(userName, db.save);
	  res.end();
	});
});

app.get('/repos', function (req, res) {
	console.log('get request happened');
	db.find((data) => { res.end(JSON.stringify(data)) });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

