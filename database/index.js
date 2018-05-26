const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher');

let repoSchema = mongoose.Schema({
  id: {type: Number, index: {unique: true}},
  name: String,
  url: String,
  user: String,
  avatar: String, 
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {	
	for (var i = 0; i < repos.length; i++) {
		var iso = new Repo ({
			id: repos[i].id,
			name: repos[i].name,
			url: repos[i].html_url,
			user: repos[i].owner.login,
			avatar: repos[i].owner.avatar_url,
			forks: repos[i].forks_count
	  });

		iso.save(function(err, iso) {
			if (err) { console.log('there was an err', err); }  
			else { console.log('save succesful'); }
		});  
	}
}

let find = (cb) => {
	Repo.find().exec((err, data) => {
    cb(data);
	})
}

module.exports.save = save;
module.exports.find = find;
