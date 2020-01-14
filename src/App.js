import React, { Component } from 'react';
import GetUsername from './GetUsername';
import DisplayData from './DisplayData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        location: '',
        repos: '',
        followers: '',
        url: '',
        create: '',
    };
  }
  handleName = (obj) => {
    let requestURL = 'https://api.github.com/users/'+obj.name;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      let response = request.response;
      let { login,html_url,location,public_repos,followers,created_at } = response;
      this.setState({
        username: login,
        location: location,
        repos: public_repos,
        followers: followers,
        url: html_url,
        create: created_at
      });
    }
  }
  
  render(){
    return (
      <div className="App">
        <GetUsername handleName={this.handleName} />
        <DisplayData displaydata={this.state} />
      </div>
    );
  }
}

export default App;
