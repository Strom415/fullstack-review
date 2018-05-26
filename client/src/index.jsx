import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repo from './components/Repo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/repos',
      success: (data) => {
        // console.log(JSON.parse(data)[0].name)
        this.setState({
          repos: JSON.parse(data)
        });
      }
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: term,
      success: () => console.log('post request was a success'),
      error: () => console.log('an error occured')
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));