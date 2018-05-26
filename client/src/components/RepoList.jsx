import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => {
	if (props.repos.length){
		
	};
	return(
    <div>
	    <h4> Repo List Component </h4>
	    There are {props.repos.length} repos.
	  </div>
	)
};

export default RepoList;