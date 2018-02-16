import React, { Component } from 'react';
import GitHubAPI from 'github';
var github = new GitHubAPI();

github.authenticate({
    type: 'oauth',
    token: '460b94921dad21c85133cab4701fd07d9d137049'
});

export default class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: this.props.owner,
            repo: this.props.repo,
            page: 1,
            issues: []
        };
        this.getIssues = this.getIssues.bind(this);
        // this.loadMore = this.loadMore.bind(this);
    };

    async getIssues() {
        let result = await github.issues.getForRepo({
            owner: this.state.owner,
            repo: this.state.repo,
            state: 'open',
            sort: 'created',
            page: this.state.page,
            per_page: 25,
            direction: 'desc'
        });
        let number_of_pages = await github.hasLastPage(result.meta).match(/&page=(\d{1,})/)[1];
        this.setState({
            issues: result.data,
            number_of_pages: number_of_pages
        });
    };

    // loadMore() {
    //     this.setState({page: this.state.page+1});
    //     this.getIssues();
    // }

    componentDidMount() {
        this.getIssues();
    };

    render() {
        var issues = this.state.issues.map(issue => (
            <tr className="issue" id={issue.id} key={issue.number}>
                <td>{issue.number}</td>
                <td>{issue.title}</td>
                <td>{issue.state}</td>
            </tr>
        ));
        return (
            <div>
                <h4 className="notification">
                    There are {this.state.number_of_pages} pages of issues.
                    You are on page {this.state.page}
                </h4>
                {/* <button onClick={this.loadMore}>Next</button> */}
                <table>
                    <thead>
                        <tr>
                            <th>Issue #</th>
                            <th>Issue Title</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues}
                    </tbody>
                </table>
            </div>
        );
    }
}