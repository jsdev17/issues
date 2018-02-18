// This is the Home Page
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
    let url = 'http://localhost:3005/api/jsdev17/repos';
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
          {/* This cryptic nested ternary checks if there are repos WITH issues
          to show... if not, it renders a message, else, it shows the repos */}
          {
            !this.state.loaded ? null : 
            repos.length === 0 ? <p>No repositories with issues to show...</p> : 
            repos
          }
          {/* {repos}  */}
        </ul>
        
      </div>
    );
  }
};