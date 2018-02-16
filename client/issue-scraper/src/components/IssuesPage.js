// Displays all issues of a given repository
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Issue from './Issue';
import Navigation from './Navigation';
import FilterBy from './IssuesFilterBy';

export default class IssuesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      repo: this.props.match.params.repo,
      issues: []
    }
  }

  componentDidMount() {
    let url =
        `http://localhost:3005/api/${this.state.username}/${this.state.repo}/issues`;
    // Fetch issues for repo and save them into state
    axios.get(url)
    .then(res => {
      this.setState({issues: res.data})
    });
  }

  render() {
    console.log(this.props.match);
    // Render an issue component for every issue;
    // Make it a link to the issue on GitHub
    var issues = this.state.issues.map(issue => (
      <Issue key={issue.number} issue={issue}/>
    ));
    return (
      <div>
        <Navigation
          currentLocation={this.state.repo}
        />
        <FilterBy />
        <ul id="issue-list" className="">
          {issues}
        </ul>
      </div>
    );
  }
};