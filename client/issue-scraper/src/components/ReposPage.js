// This is the Home Page
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Repo from './Repo';

export default class ReposPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loaded: false
    }
  };

  componentDidMount() {
    let url = 'http://localhost:3005/api/nodejs/repos';
    // Fetch repositories for given user from server
    axios.get(url)
      .then(res => {
        // Save repo data to state
        this.setState({
          repos: res.data,
          loaded: true
        });
      });
  };

  showReposCount() {
    return (
      <p id="repos-count">
        {this.state.repos.length} repositories available
      </p>
    );
  }

  render() {
    // Render a Repo component for each available repository
    var repos = this.state.repos.map(repo => (
      // Pass it its data as a prop
      <Repo key={repo.id} repo={repo}/>
    ));
    return (
      <div>
        <span id="repos-count" className="d-flex justify-content-center">
        {this.state.loaded ? this.showReposCount() : null}
        </span>
        <ul id="repos-content"> 
        {/* Ought to be able to handle a case in which
          there are no repos with issues. But ultimately,
          however, that depends on whether the user has 
          control over which user he searches for... */}
          {repos} 
        </ul>
      </div>
    );
  }
};